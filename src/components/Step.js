import React from "react";

const Step = (props) => {
  return (
    <form>
      <h1>{props.title}</h1>
      <input id={props.id1} placeholder={props.placeholder1}></input>
      <br />
      <input id={props.id2} placeholder={props.placeholder2}></input>
      <br></br>
      {props.step == "step1" ? (
        <button
          onClick={(e) =>
            props.handleCurrentState(e,{
              previous: true,
              next: true,
              submit: false,
            })
          }
        >
          Next
        </button>
      ) : props.step == "step2" ? (
        <>
          <button
            onClick={(e) =>
              props.handleCurrentState(e,{
                previous: false,
                next: true,
                submit: false,
              })
            }
          >
            previous
          </button>
          <button
            onClick={(e) =>
              props.handleCurrentState(e,{ previous: true, next: false,submit:true })
            }
          >
            next
          </button>
        </>
      ) : (
        <>
          <button onClick={(e)=>props.handleCurrentState(e,{previous:true,next:true,submit:false})}>previous</button>
          <button onClick={(e)=>e.preventDefault()}>submit </button>
        </>
      )}
    </form>
  );
};

export default Step;
