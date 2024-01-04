"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../../homeComponents/Dummy.css";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const blackDiv = useRef();
  const redDiv = useRef();
  const aboutDiv = useRef();
  const symmetryDiv = useRef();
  const textDiv = useRef();
  const pinkDiv = useRef();

  useEffect(() => {
    gsap.to(blackDiv.current, {
      scrollTrigger: {
        trigger: blackDiv.current,
        markers: true,
        start: "80px", 
        end : "90px",
        onEnter: () => {
          gsap.to(redDiv.current, {
            backgroundColor: "gray",
          });
          gsap.to(blackDiv.current, {
            height: "300px",
          });
          gsap.to(symmetryDiv.current, {
            fontSize : "50px"
          })
          gsap.to(aboutDiv.current, {
            fontSize : "60px"
          })
          gsap.to(textDiv.current, {
            opacity : "0", // Fades out the element
            transition: "all  0.1s",
            delay: 0.1, // Delay the animation by 2 seconds
          })
          gsap.to(pinkDiv.current , {
            marginTop: "-150px",
          })
        },
        onEnterBack: () => {
          gsap.to(redDiv.current, {
            backgroundColor: "blue",
          });
          gsap.to(blackDiv.current, {
            height : "384px",
          });
          gsap.to(symmetryDiv.current, {
            fontSize : "60px"
          })
          gsap.to(aboutDiv.current, {
            fontSize : "72px"
          })
          gsap.to(textDiv.current, {
            opacity : "1",            
            transition: "all  0.1s",
            delay: 0.1, // Delay the animation by 2 seconds
          })
          gsap.to(pinkDiv.current , {
            marginTop: "-100px",
          })
        },
      },
    });

    gsap.to(redDiv.current , {
      scrollTrigger: {
        trigger: redDiv.current,
        markers: true,
        start: "400px", 
        end : "620px",
        onEnter : ()=>{
          gsap.to(pinkDiv.current , {
            scrollTrigger : {
              pin : true
            }
          })
        }
      }
    })

  }, []);

  return (
    <>
      <div ref={blackDiv} className="bg-black h-96 text-white pt-10 pl-20 fixed w-full">
        <div ref={symmetryDiv} className="text-6xl"> symmetry </div>
        <div ref={aboutDiv} className="text-7xl pt-10"> about</div>
        <div ref={textDiv} className="w-[40%] pt-5">symmetry group is a digital technology and experiences company that specializes in digital products and services. our prime focus is on the transformation and digitalization of marketing, sales, and other consumer-centric functions of organizations</div>
      </div>
      <div ref={redDiv} className="bg-yellow-500 h-[2000px] pt-[450px]">
        <div ref={pinkDiv} className="bg-pink-500 h-[100px] mt-[-100px] text-black fixed w-full">hello</div>
        <div className="bg-white h-[1800px] text-black">
          <div className="text-7xl h-[600px]">symmetry</div>  
          <div className="text-7xl h-[600px]">symmetry</div>  
          <div className="text-7xl h-[600px]">symmetry</div>  
          <div className="text-7xl h-[600px]">symmetry</div>  
          <div className="text-7xl h-[600px]">symmetry</div>  
          <div className="text-7xl h-[600px]">symmetry</div>  
        </div>
      </div>
    </>
  );
};

export default Page;
