import { useEffect, useRef } from "react";
import "./App.css"

const FlutterWrapper = () => {
  const flutterContainerRef = useRef(null);

  // useEffect(() => {
  //   const loadScript = (src) => {
  //     return new Promise((resolve, reject) => {
  //       const script = document.createElement("script");
  //       script.src = src;
  //       script.defer = true;
  //       script.onload = resolve;
  //       script.onerror = () => reject(`Failed to load script: ${src}`);
  //       document.body.appendChild(script);
  //     });
  //   };

  //   (async () => {
  //     try {
  //       await loadScript("/flutter/web/flutter.js");
  //       await loadScript("/flutter/web/flutter_bootstrap.js");
  //       await loadScript("/flutter/web/main.dart.js");

  //       if (window._flutter && window._flutter.loader) {
  //         window._flutter.loader.load({
  //           config: {
  //             hostElement: document.getElementById('flutter-container'),
  //           },
  //           onEntrypointLoaded: async function onEntrypointLoaded(engineInitializer) {
  //             let engine = await engineInitializer.initializeEngine({
  //               multiViewEnabled: true, 
  //             });
  //             let app=await engine.runApp();
  //             let viewId = app.addView({
  //               hostElement: flutterContainerRef.current,
  //             });
  //             console.log('flutter view',viewId)
  //           },
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error loading Flutter scripts:", error);
  //     }
  //   })();
  // }, []);
  // useEffect(()=>{
  //   console.log(flutterContainerRef.current)
  // },[flutterContainerRef])
    
  // return (
  //  <div id="flutter-container" ref={flutterContainerRef} style={{ width: '1000px', height: '500px', backgroundColor:"red" }} />
  // );


  
  useEffect(() => {
    const handleMessage = (event) => {
      //  console.log("hi",event.origin)
      //  console.log(event.origin==="http://localhost:51465")
       if (event.origin === "http://localhost:64996") {
        console.log("inside the block");
        alert(event.data);
       }
      }
        

    window.addEventListener("message", handleMessage);

    
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);


  return (
    <div class="flex h-screen w-screen">
      
      <nav class="w-64 bg-gray-900 text-white p-4 h-screen">
        <h2 class="text-xl font-bold">Features</h2>
        <ul>
          <li class="py-2 cursor-pointer">Graph</li>
          <li class="py-2 cursor-pointer">Other Feature</li>
        </ul>
      </nav>
  
      <div class="flex flex-col flex-1">
        
        <header class="h-16 bg-gray-800 text-white flex items-center p-4">
          <h1 class="text-lg font-semibold">Graph Visualization</h1>
        </header>
  
     
        <div class="relative flex-1 min-h-[300px] transition-all duration-300 ease-in-out">
          <iframe 
            class="absolute w-full h-full will-change-transform"
            src="http://localhost:64996/index.html"
            frameborder="0">
          </iframe>
        </div>
      </div>
    </div>
  );
};
// import React, { useEffect, useRef } from "react";

// const FlutterWrapper = () => {
//   const flutterContainerRef = useRef(null);

//   useEffect(() => {
//     const loadFlutterApp = () => {
//       if (!flutterContainerRef.current) return;

//       const flutterJs = document.createElement("script");
//       flutterJs.src = "http://localhost:8080/flutter.js";
//       flutterJs.async = true;
//       document.body.appendChild(flutterJs);

//       flutterJs.onload = () => {
//         if (!window._flutter) {
//           console.error("Flutter not loaded: _flutter is undefined.");
//           return;
//         }

//         console.log("Flutter loaded successfully", window._flutter);

//         const bootstrapScript = document.createElement("script");
//         bootstrapScript.src = "http://localhost:8080/flutter_bootstrap.js";
//         bootstrapScript.async = true;
//         document.body.appendChild(bootstrapScript);

//         bootstrapScript.onload = () => {
//           if (window._flutter.loader.loadEntrypoint) {
//             window._flutter.loader.loadEntrypoint({
//               onEntrypointLoaded: async (engineInitializer) => {
//                 const appRunner = await engineInitializer.initializeEngine();
//                 await appRunner.runApp();
//               },
//             });
//           } else {
//             console.log(window._flutter.loader.loadEntrypoint)
//             console.error("Flutter bootstrap not loaded: loadEntrypoint is undefined.");
//           }
//         };
//       };
//     };

//     loadFlutterApp();
//   }, []);

//   return (
//     <div
//       ref={flutterContainerRef}
//       style={{ width: "100%", height: "100vh", margin: 0 }}
//     />
//   );
// };

export default FlutterWrapper;