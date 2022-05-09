import '../styles/style.css'
import React, {useState} from "react";
import classNames from "classnames";
import axios from "../api/axios";

const languageItems = [{
  id: 1, title: 'C#',
}, {
  id: 2, title: 'C++',
}, {
  id: 3, title: 'Python',
}, {
  id: 4, title: 'Javascript',
}, {
  id: 5, title: 'Java',
}, {
  id: 6, title: 'C',
}, {
  id: 7, title: 'Ruby',
}, {
  id: 8, title: 'Swift',
}, {
  id: 9, title: 'R',
}]

const Compile = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  const [loadText, setLoadText] = useState()
  const [selectFile, setSelectFile] = useState('')
  const [result, setResult] = useState('')
  const [right, setRight] = useState('')

  const handleButtonClick = (index) => {
    setActiveIndex(index)
  }


  const handleUpload = (e) => {
    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = e.target.result
      setLoadText(text)
    }
    reader.readAsText(e.target.files[0])

    setSelectFile(e.target.files[0])
  }

  const compileFile = (e) => {
    try {
      axios.post(`/DefaultCompilator?code=${loadText}`)
        .then(res => {
          setRight(res.data.right.toString())
          setResult(res.data)
        })
    } catch (err){
      console.log(err)
    }
  }

  const compileFilePer = (e) => {
    try {
      axios.post(`/v1/Perimeter?code=${loadText}`)
        .then(res => {
          setRight(res.data.right.toString())
          setResult(res.data)
        })
    } catch (err){
      console.log(err)
    }
  }

  const compileFileCalc = (e) => {
    try {
      axios.post(`/v1/Calculator?code=${loadText}`)
        .then(res => {
          setRight(res.data.right.toString())
          setResult(res.data)
        })
    } catch (err){
      console.log(err)
    }
  }


  return (<section className="section_main">
      <div className="descr-section">
        <p className="descr-title">Online editor, IDE, <br/> compiler, interpreter, and REPL</p>
        <p className="descr">Code, collaborate, compile, run, share, and deploy online from <br/> your browser</p>
        <a href="#" className="full-experience">Sign up for the full experience</a>
      </div>

      <div className="language-wrapper">
        <h2 className="language-title">Choose language: </h2>
        {languageItems.map(btn => {
          return <button key={btn.id} onClick={() => handleButtonClick(btn.id)}
                         className={classNames("language_item", activeIndex === btn.id ? "language_item__active" : '')}>{btn.title}</button>
        })}
      </div>

      <div className="result_section">
        <div className="file" id="upload-box">
          {/*<span className="result-title">Upload file with C# code</span>*/}

          <div className="file-upload_box">
            <label htmlFor="file-upload" className="custom-file-upload">
              Upload file
            </label>
            <input id="file-upload" type="file" onChange={(e) => handleUpload(e)}/>
            <div className="custom-file-upload__info">
              <p>File name: {selectFile.name}</p>
              <p>File size: {selectFile.size} bytes</p>
            </div>
          </div>
        </div>

        {/*<div className="result-box">*/}
        {/*  <span className="result-title">Or write code</span>*/}
        {/*  <textarea className="result-content"> </textarea>*/}
        {/*</div>*/}

        <div className="buttons-box">
          <div className="compile">
            <span className="compile__button-label">Default Compile</span>
            <button className="compile__button" onClick={compileFile}>Compile</button>
          </div>

          <div className="compile">
            <span className="compile__button-label">Task 1: write a program that will calculate the perimeter of the square</span>
            <button className="compile__button" onClick={compileFilePer}>Compile</button>
          </div>

          <div className="compile">
            <span className="compile__button-label">Task 2: write a program that will perform 4 simple operations (addition, subtraction, division, multiplication)</span>
            <button className="compile__button" onClick={compileFileCalc}>Compile</button>
          </div>
        </div>

        <div className="compile-result-box">
          <span className="compile-result-title">Result</span>
          <div className="compile-result">
            <div>
              <span>Code validity: </span>
              <span>{right}</span>
            </div>
            <div>
              <span>Result of compilation: </span>
              <span>{result.result}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compile



