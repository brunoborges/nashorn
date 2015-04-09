/*
 * Nashorn Maven Executor
 * 
 * This script is for running Nashorn scripts that depend on Maven artifacts.
 * It will load your dependencies from a .mvn file (see samples), fire Maven
 * to download dependencies for you, then setup the classpath for starting
 * Nashorn and your actual application.
 * 
 * See samples for more information.
 * 
 * To run this script, you must enable the Scripting extension of Nashorn:
 * 
 *   $ jjs -scripting mvn.js -- samples/jaxrs.mvn
 * 
 * Author: Bruno Borges (@brunoborges)
 * Version: 1.0
 * Since: April 2015
 */
var Collectors = Packages.java.util.stream.Collectors;
var Arrays = Packages.java.util.Arrays;
var jString = Packages.java.lang.String;
var BufferedOutputStream = Packages.java.io.BufferedOutputStream;
var Files = Packages.java.nio.file.Files;
var Paths = Packages.java.nio.file.Paths;
var Charset = Packages.java.nio.charset.Charset;

function checkPathExists(path) {
  if (Files.isReadable(path) === false) {
      print("ERROR: File '${path}' cannot be found or is not readable.");
      exit();
  }
}

var mvnDefFile = Paths.get(arguments[0]);
var parentPath = mvnDefFile.getParent()
checkPathExists(mvnDefFile);
load(mvnDefFile.toString());

if (typeof maven === 'undefined') {
    print("ERROR: Nashorn Maven application has no 'maven' object defined.");
    exit();
}

var mainScript = Paths.get(parentPath, maven.main);
checkPathExists(mainScript);

var depArray = Java.to(maven.dependencies, "java.lang.String[]");
var depStream = Arrays.stream(depArray);
var dependenciesCP = depStream.map(function (dep) {
    var tokens = dep.split(":");
    var groupId = tokens[0];
    var artifactId = tokens[1];
    var version = tokens[2];
    var dependency = <<EOF
        <dependency>
            <groupId>${groupId}</groupId>
            <artifactId>${artifactId}</artifactId>
            <version>${version}</version>
        </dependency>
    EOF
    return dependency;
}).collect(Collectors.joining("\n"));

var pomTemplate = <<EOF
 <project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>nashorn-maven</groupId>
    <artifactId>nashorn-maven-temp-artifact</artifactId>
    <packaging>pom</packaging>
    <version>1.0-SNAPSHOT</version>
    <name>nashorn-maven-temp-artifact</name>
    <dependencies>
      ${dependenciesCP}
    </dependencies>
 </project>
EOF

var cpFile = Paths.get(parentPath, mainScript.toFile().getName()+'.cp').toAbsolutePath();
var pomFile = Files.createTempFile('pom-', '-'+mainScript.toFile().getName() + '.xml');
var charset = Charset.forName("US-ASCII");
var writer = Files.newBufferedWriter(pomFile, charset);
writer.write(pomTemplate, 0, pomTemplate.length);
writer.close();

var mvnCmd = "mvn -f ${pomFile} -Dmdep.outputFile=${cpFile} dependency:build-classpath"; 
$EXEC(mvnCmd);

var classpath = new jString(Files.readAllBytes(cpFile));
Files.delete(cpFile);

var nashornCmd = "jjs -cp ${classpath} ${maven.options} ${mainScript} -- ${maven.arguments}";
$EXEC(nashornCmd);
print($OUT);
