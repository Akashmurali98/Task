import { useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";

import "../../Css/Fieldslinker.css";

const FiledsLinker = () => {
  const { register, handleSubmit } = useForm();

  const option1 = ["one to One", "one to Many"];
  const option2 = ["Enable", "Disable"];
  const option3 = ["Straight", "square-Ends"];
  const option4 = ["Enable", "Disable"];

  const [question, setQuestion] = useState([
    { name: "firstName", id: "name" },
    { name: "phone", id: "mobile" },
    { name: "email", id: "mail" },
    { name: "role", id: "design" },
    { name: "birthday", id: "date" },
  ]);
  const [answer, setAnswer] = useState([
    { name: "Akash", id: "name" },
    { name: "9884501166", id: "phoneNum" },
    { name: "myselfakash98@gmail.com", id: "mail" },
    { name: "Software Developer", id: "designation" },
    { name: "23/11/1998", id: "dob" },
  ]);

  const handleDragSideA = (result) => {
    if (!result.destination) return;
    const updatedQuestion = [...question];
    const [removed] = updatedQuestion.splice(result.source.index, 1);
    updatedQuestion.splice(result.destination.index, 0, removed);
    setQuestion(updatedQuestion);
  };
  const handleDragSideB = (result) => {
    if (!result.destination) return;
    const updatedAnswer = [...answer];
    const [removed] = updatedAnswer.splice(result.source.index, 1);
    updatedAnswer.splice(result.destination.index, 0, removed);
    setAnswer(updatedAnswer);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const [optionOne, setOptionOne] = useState(true);
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");

  return (
    <>
      <div>Fields Linker</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Change Options</legend>
          <div>
            {option1.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  value={option}
                  {...register("optionOne")}
                  checked={optionOne === option}
                  onChange={() => setOptionOne(option)}
                />
                {option}
              </label>
            ))}
            {option2.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  value={option}
                  {...register("optionTwo")}
                  checked={optionTwo === option}
                  onChange={() => setOptionTwo(option)}
                />
                {option}
              </label>
            ))}
            {option3.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  value={option}
                  {...register("optionThree")}
                  checked={optionThree === option}
                  onChange={() => setOptionThree(option)}
                />
                {option}
              </label>
            ))}
            {option4.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  value={option}
                  {...register("optionFour")}
                  checked={optionFour === option}
                  onChange={() => setOptionFour(option)}
                />
                {option}
              </label>
            ))}
            <input type="checkbox" {...register("mobile")} />
            <label>Mobile:</label>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
      <div className="matchContainer">
        <button className="btnRestart">Restart</button> <br></br>
        <DragDropContext onDragEnd={handleDragSideA}>
          <Droppable droppableId="characters">
            {(provided) => (
              <span
                className="leftButtons"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <span className="buttonHead">Column in Files</span>
                {question.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <span
                        className="sideA"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <span>{item.name} </span>
                      </span>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </span>
            )}
          </Droppable>
        </DragDropContext>
        <DragDropContext onDragEnd={handleDragSideB}>
          <Droppable droppableId="characters">
            {(provided) => (
              <span
                className="rightButtons"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <span className="buttonHead">Column in Files</span>
                {answer.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <span
                        className="sideB"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <span>{item.name}</span>
                      </span>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </span>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};

export default FiledsLinker;
