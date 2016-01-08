include=function(){function f(){var a=this.readyState;(!a||/ded|te/.test(a))&&(c--,!c&&e&&d())}var a=arguments,b=document,c=a.length,d=a[c-1],e=d.call;e&&c--;for(var g,h=0;c>h;h++)g=b.createElement("script"),g.src=arguments[h],g.async=!0,g.onload=g.onerror=g.onreadystatechange=f,(b.head||b.getElementsByTagName("head")[0]).appendChild(g)};
serialInclude=function(a){var b=console,c=serialInclude.l;if(a.length>0)c.splice(0,0,a);else b.log("Done!");if(c.length>0){if(c[0].length>1){var d=c[0].splice(0,1);b.log("Loading "+d+"...");include(d,function(){serialInclude([]);});}else{var e=c[0][0];c.splice(0,1);e.call();};}else b.log("Finished.");};serialInclude.l=new Array();

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    return vars;
}	 

serialInclude(['../lib/CGF.js', 
    'XMLscene.js', 
    'MySceneGraph.js', 
    'primitives/Rectangle.js',
    'primitives/Cylinder.js', 
    'primitives/Sphere.js', 
    'primitives/Triangle.js', 
    'primitives/Plane.js', 
    'primitives/Patch.js', 
    'primitives/Terrain.js', 
    'Interface.js',
    'Animation.js',
    'CircularAnimation.js',
    'LinearAnimation.js',
    'requests.js',
    'Tab.js',
    'Timer.js',
    'Piece.js',
    'Cell.js',
    'PickingAnimation.js',


main=function(filename)
{
    var app = new CGFapplication(document.body);
    var myScene = new XMLscene();
    var myInterface = new Interface();


    app.init();
    app.setScene(myScene);
    app.setInterface(myInterface);

    myInterface.setActiveCamera(myScene.camera);
	
    var filename1=getUrlVars()['file'] || "galaxy.lsx";
	var filename2=getUrlVars()['file'] || "rustic.lsx";

	var myGraph = new MySceneGraph(filename1, myScene);

    app.run();
}

]);