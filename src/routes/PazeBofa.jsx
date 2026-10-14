import React from 'react';
import {Intro, TheMethodology, TheExecution} from '../components/PazeBofa.js'

const PazeBofa = () => {
  return (
    <div>
        {/* The Intro */}
        <div>
          <h1 className="font-bold text-slate-800">{Intro.project}</h1>
          <p><strong>Role:</strong> {Intro.Role}</p>
          <p><strong>Format:</strong> {Intro.Format}</p>
          <p><strong>Category:</strong> {Intro.The_Category}</p>
            <p><strong>Problem:</strong> {Intro.The_Problem}</p>
        </div>

        {/* The Methodology*/}
        <div>
            <h2 className="text-slate-600 font-semibold text-lg sm:text-xl">Methodology</h2>
            <p>{TheMethodology.Empathy_Phase}</p>
            <p>{TheMethodology.Define_Phase}</p>
        </div>

        {/* The Execution */}
        <div>
            <h2 className="text-slate-600 font-semibold text-lg sm:text-xl">Execution</h2>
            <p>{TheExecution.The_Design}</p>
            <p>{TheExecution.The_1STProcess}</p>
            <p>{TheExecution.The_2NDProcess}</p>
            <p>{TheExecution.The_Outcome}</p>
        </div>
    </div>
  );
};

export default PazeBofa;