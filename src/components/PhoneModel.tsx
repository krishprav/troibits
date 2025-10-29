import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as Three from "three";
import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ModelView from "./ModelView";
import { models } from "../constants";

const PhoneModel = () => {
  const [size] = useState("large");
  const [currentIndex, setCurrentIndex] = useState(0);
  const model = models[currentIndex];
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cameraControl = useRef();
  const phoneRef = useRef<Three.Group>(new Three.Group());
  const [, setRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);

  const handleFeatureClick = (index: number) => {
    setCurrentIndex(index);
  };

  const changeFeature = (direction: "next" | "prev") => {
    if (scrollTimeout.current) return;
    
    if (direction === "next") {
      setCurrentIndex((prev) => Math.min(prev + 1, models.length - 1));
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }

    scrollTimeout.current = setTimeout(() => {
      scrollTimeout.current = null;
    }, 500);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        changeFeature("next");
      } else if (e.deltaY < 0) {
        changeFeature("prev");
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="feature-showcase-container">
          <div className="feature-left">
            <h2 className="text-2xl font-bold mb-1" style={{ color: '#2563eb' }}>
              Feature No.{currentIndex + 1} -
            </h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {model.title}
            </h3>
            <ul className="space-y-3 text-gray-600">
              {model.descriptions.map((desc, index) => (
                <li key={index} className="text-base leading-relaxed">
                  • {desc}
                </li>
              ))}
            </ul>
            <div className="feature-nav mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleFeatureClick(Math.max(currentIndex - 1, 0))}
                className="text-3xl focus:outline-none"
                style={{ color: currentIndex === 0 ? '#d1d5db' : '#2563eb' }}
                disabled={currentIndex === 0}
              >
                ←
              </button>
              <div className="w-0.5 h-8" style={{ backgroundColor: '#2563eb' }}></div>
              <button
                type="button"
                onClick={() => handleFeatureClick(Math.min(currentIndex + 1, models.length - 1))}
                className="text-3xl focus:outline-none"
                style={{ color: currentIndex === models.length - 1 ? '#d1d5db' : '#2563eb' }}
                disabled={currentIndex === models.length - 1}
              >
                →
              </button>
            </div>
          </div>

          <div className="feature-center">
            <div className="relative h-[75vh] w-full overflow-hidden">
              <ModelView
                key={model.id}
                index={1}
                groupRef={phoneRef}
                gsapType="view1"
                controlRef={cameraControl}
                setRotation={setRotation}
                item={model}
                size={size}
              />

              <Canvas
                className="size-full"
                style={{ position: "fixed", top: 0, left: 0, bottom: 0, right: 0, overflow: "hidden" }}
                eventSource={document.getElementById("root") ?? undefined}
              >
                <View.Port />
              </Canvas>
            </div>
          </div>

          <div className="feature-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Feature Showcase</h3>
            <ul className="space-y-4">
              {models.map((m, index) => (
                <li
                  key={m.id}
                  className={`flex items-start cursor-pointer transition-all ${
                    index === currentIndex ? "font-semibold text-gray-900" : "text-gray-600"
                  }`}
                  style={{
                    borderLeft: index === currentIndex ? '4px solid #2563eb' : 'none',
                    paddingLeft: index === currentIndex ? '0.75rem' : '0'
                  }}
                  onClick={() => handleFeatureClick(index)}
                >
                  {m.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PhoneModel;
