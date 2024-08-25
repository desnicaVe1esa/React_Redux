import AddColorForm from "./AddColorForm";

function App() {

  return (
    <div className="App">
      <AddColorForm onNewColor={(title, color) => {
       console.log(`TODO: add new ${title} and ${color} to the list`);
       console.log(`TODO: render UI with new color`);
      }}/>
    </div>
  );
}

export default App;
