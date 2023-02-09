import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = event => {
    event.preventDefault();
    const value = inputValue.trim();

    if(value.length <= 1 && setInputValue) return;

    onNewCategory(value);
    setInputValue('');
  }

  return(
    <form onSubmit={event => onSubmit(event)}>
      <input
        type='text'
        placeholder='Search Giphs...'
        value={inputValue}
        onChange={onInputChange} />
    </form>
  )
}