import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    bookTitle: "", authorName: "", isbn: "", category: "", publicationYear: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/books", formData);
      alert("Book added successfully!");
      setFormData({
        bookTitle: "", authorName: "", isbn: "", category: "", publicationYear: ""
      });
    } catch (error) {
      alert("Failed to add book");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="bookTitle" placeholder="Book Title" value={formData.bookTitle} onChange={handleChange} />
      <input name="authorName" placeholder="Author Name" value={formData.authorName} onChange={handleChange} />
      <input name="isbn" placeholder="ISBN" value={formData.isbn} onChange={handleChange} />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input name="publicationYear" placeholder="Publication Year" value={formData.publicationYear} onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default App;