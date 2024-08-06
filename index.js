fetch('https://api1-9wt7.onrender.com/students')
      .then(response => response.json())
      .then(json => {
        let students=document.getElementById('students');
        json.forEach(s => {
            let student=document.createElement('option');
            student.innerHTML=s.name;
            students.appendChild(student);

        });
      })

