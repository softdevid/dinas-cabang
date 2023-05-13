import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import axios from "axios";
import { useState } from "react";

const Create = () => {
  const [question, setQuestion] = useState('');
  const [type, setType] = useState('multiple_choice');
  const [options, setOptions] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/super-admin/skm', {
      question,
      type,
      options
    })
      .then(response => {
        console.log(response.data);
        // Reset state
        setQuestion('');
        setType('multiple_choice');
        setOptions([]);
      })
      .catch(error => console.log(error));
  };

  const handleOptionChange = (event, index) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    const newOptions = [...options, ''];
    setOptions(newOptions);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question">Pertanyaan:</label>
          <input type="text" id="question" value={question} onChange={event => setQuestion(event.target.value)} />
        </div>
        <div>
          <label htmlFor="type">Jenis Pertanyaan:</label>
          <select id="type" value={type} onChange={event => setType(event.target.value)}>
            <option value="multiple_choice">Pilihan Ganda</option>
            <option value="essay">Essay</option>
          </select>
        </div>
        {type === 'multiple_choice' && (
          <div>
            <label>Opsi Jawaban:</label>
            <ul>
              {options.map((option, index) => (
                <li key={index}>
                  <input type="text" value={option} onChange={event => handleOptionChange(event, index)} />
                </li>
              ))}
            </ul>
            <button type="button" onClick={handleAddOption}>Tambah Opsi</button>
          </div>
        )}
        <button type="submit">Simpan</button>
      </form>
    </>
  )
}

Create.layout = (page) => <SuperAdminTemplate children={page} />
export default Create;
