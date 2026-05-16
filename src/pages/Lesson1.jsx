import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Renderer, Stave, StaveNote, Voice, Formatter } from "vexflow";
import CMajorScale from "../assets/c-major-scale.mp3";

function Lesson1() {
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
      new StaveNote({ keys: ["c/4"], duration: "8" }),
      new StaveNote({ keys: ["d/4"], duration: "8" }),
      new StaveNote({ keys: ["e/4"], duration: "8" }),
      new StaveNote({ keys: ["f/4"], duration: "8" }),
      // ];
      // const measure2 = [
      new StaveNote({ keys: ["g/4"], duration: "8" }),
      new StaveNote({ keys: ["a/4"], duration: "8" }),
      new StaveNote({ keys: ["b/4"], duration: "8" }),
      new StaveNote({ keys: ["c/5"], duration: "8" }),
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
      <h1>Lesson 1</h1>
      <h2>Major Scale</h2>
      <p>A scale is any set of notes with a certain relationship.</p>
      <p>
        A major is composed of eight notes where the last note is a octave of
        the first one. An octave is the same note but different pitch. For
        example, A4 is 440 Hz while A5 is 880 Hz. The major scale is composed of
        notes with the following spaces(w: whole step, h:half step):
        -w-w-h-w-w-w-h. Check out the example below.
      </p>
      <div id="output" ref={divRef}></div>
      <audio controls src={CMajorScale}></audio>
      {/* <figure>
        <figcaption>Listen to the C Major Scale:</figcaption>
        <audio controls src="/assets/c-major-scale.mp3"></audio>
        <a href="/shared-assets/audio/t-rex-roar.mp3"> Download audio </a>
      </figure> */}
    </div>
  );
}

export default Lesson1;
