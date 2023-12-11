import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "../../assets/Css/fieldslinker.css";

const FiledsLinker = () => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("Enable");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("noWrap");
  const [optionFive, setOptionFive] = useState(false);

  const [question, setQuestion] = useState([
    { name: "firstName", id: "firstName", color: 'green' },
    { name: "phone", id: "mobile" , color: 'red' },
    { name: "email", id: "mail", color: 'blue' },
    { name: "role", id: "design", color: 'yellow' },
    { name: "birthday", id: "date", color: 'orange' },
  ]);

  
  const [answer, setAnswer] = useState([
    { name: "Akashkhjh", id: "firstname" },
    { name: "9884501166909089", id: "phoneNum" },
    { name: "myselfakash98@gmail.com asdjkhkashdj", id: "email" },
    { name: "Software Developer asdkjashdkj", id: "designation" },
    { name: "23/11/1998", id: "dob" },
  ]);

  const option1 = ["one to One", "one to Many"];
  const option2 = ["Enable", "Disable"];
  const option3 = ["Straight", "square-Ends"];
  const option4 = ["wrap", "noWrap"];

  const [leftMatched, setLeftMatched] = useState([]);
  const [rightMatched, setRightMatched] = useState([]);

  const handleDragSideA = (result) => {
    setLeftMatched([...leftMatched, result?.source?.index]);
    setRightMatched([...rightMatched, result?.destination?.index]);
    if (!result?.destination) return;
    
  };
  const handleMobile = (status) => {
    setOptionFive(status);
  };

  return (
    <>
      <div>Fields Linker</div>
      <fieldset>
        <legend>Change Options</legend>
        <div>
          {option1.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                value={option}
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
                checked={optionFour === option}
                onChange={() => setOptionFour(option)}
              />
              {option}
            </label>
          ))}
          <input
            type="checkbox"
            checked={optionFive}
            onChange={() => handleMobile(!optionFive)}
          />
          <label>Mobile:</label>
        </div>
      </fieldset>
      <div className={optionTwo === "Enable" ? "matchContainer" : "disable"}>
        <button className="btnRestart">Restart</button> <br></br>
        <DragDropContext onDragEnd={handleDragSideA}>
          <Droppable droppableId="1">
            {(provided) => (
              <span
                className="leftButtons"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <span className="buttonHead">Column in Files</span>
                {question.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <span
                          className={optionFive ? "hoverSideA" : "sideA"}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}

                        >
                          <span
                            className={
                              optionFour == "noWrap" ? "noWrap" : "wrap"
                            }
                            style={{
                              backgroundColor: leftMatched?.includes(index)
                                ? question?.[leftMatched.indexOf(index)]?.color
                                : "",
                            }}
                          >
                            {item.name}{" "}
                          </span>
                        </span>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </span>
            )}
          </Droppable>
          <Droppable droppableId="2">
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
                        className={optionFive ? "hoverSideB" : "sideB"}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <span
                          className={optionFour == "noWrap" ? "noWrap" : "wrap"}
                          style={{
                            backgroundColor: rightMatched?.includes(index)
                              ? question?.[rightMatched.indexOf(index)]?.color
                              : "",
                          }}
                        >
                          {item.name}
                        </span>
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
      <button>Save Links</button>

    </>
  );
};

export default FiledsLinker;
