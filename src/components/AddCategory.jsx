import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = event => {
    event.preventDefault();
    const value = inputValue.trim();

    if(!value.length <= 1) {
      setInputValue('');
      onNewCategory(value);
    }
  }

  return(
    <form onSubmit={onSubmit} className="gif-form">
      <button type="submit">Add Category</button>
      <input
        type='text'
        placeholder='Search Giphs...'
        value={inputValue}
        onChange={onInputChange} />
    </form>
  )
}