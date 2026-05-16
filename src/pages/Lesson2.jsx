import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Renderer, Stave, StaveNote, Voice, Formatter } from "vexflow";
import CMajorScale from "../assets/c-major-scale.mp3";

function Lesson2() {
  const divRef = useRef(null);
  useEffect(() => {
    const div = divRef.current;
    const renderer = new Renderer(div, Renderer.Backends.SVG);
    renderer.resize(600, 200);
    const context = renderer.getContext();

    const stave = new Stave(10, 40, 500);
    stave.addClef("treble").addTimeSignature("4/4");
    stave.setContext(context).draw();

    const measure = [
      new StaveNote({ keys: ["a/3"], duration: "8" }),
      new StaveNote({ keys: ["b/3"], duration: "8" }),
      new StaveNote({ keys: ["c/4"], duration: "8" }),
      new StaveNote({ keys: ["d/4"], duration: "8" }),
      // ];
      // const measure2 = [
      new StaveNote({ keys: ["e/4"], duration: "8" }),
      new StaveNote({ keys: ["f/4"], duration: "8" }),
      new StaveNote({ keys: ["g/4"], duration: "8" }),
      new StaveNote({ keys: ["a/4"], duration: "8" }),
    ];

    const voice = new Voice({ num_beats: 8, beat_value: 8 });
    voice.addTickables(measure); // add a measure to staff
    // voice.addTickables(measure2);

    new Formatter().joinVoices([voice]).format([voice], 400);

    voice.draw(context, stave);
    return () => {
      div.innerHTML = "";
    };
  }, []);

  return (
    <div className="main">
      <h1>Lesson 2</h1>
      <h2>Minor Scale</h2>
      <p>A scale is any set of notes with a certain relationship.</p>
      <p>
        A minor is composed of eight notes where the last note is a octave of
        the first one. The major scale is composed of notes with the following
        spaces: -w-h-w-w-h-w-w. Check out the example below.
      </p>
      <div id="output" ref={divRef}></div>
    </div>
  );
}

export default Lesson2;
