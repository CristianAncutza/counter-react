import {
  RecoilRoot, 
  useRecoilState,
  atom, 
  useRecoilValue,
  selector

}from 'recoil'

function App(){
  return(
    <RecoilRoot>
        <TextInput>
          
        </TextInput>
        <Counter></Counter>
    </RecoilRoot>
  )
}

const textInputState = atom({
  key:"textInputState",
  default:'',
})

const textInputSelector = selector({
  key:"textInputSelector",
  get:({ get }) => {
    const tet = get(textInputState)
  }
})

function TextInput(){
  const [text, setText] = useRecoilState(textInputState)
  const onInputChange= (input) =>{
    setText(input.target.value)
  }

  return(
    <div>
      <input value ={text} onChange={onInputChange}/>
    </div>
  )
}


function Counter(){
  const text = useRecoilValue(textInputState)
  const length = text.length
  return (
    <span>{length}</span>
  )
}
export default App;