import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { base_url } from './config/api'

function App() {

  const [winners, setWinners] = useState([])
  const [cat, setCat] = useState('')
  const [year, setYear] = useState(1901);
  const [maxYear, setMaxYear] = useState(2018)

  useEffect(() => {
    fetch(base_url + `?category=${cat}&year=${year}&yearTo=${maxYear}`).then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data)
      setWinners(data.prizes)
    })

  }, [cat, year, maxYear])

  return (
    <div className="App">
      <Header items={winners} setCat={setCat} setYear={setYear} setMaxYear={setMaxYear} />
      <div className="main_App">
        <div className="card1">
          {winners.map((data, i) => {
            return (
              <div key={i}>
                <div className="cd" >
                  <h1 >{data.category}-{data.year}</h1>
                  {data.overallMotivation && data.overallMotivation}
                  {data.laureates && data.laureates.map((dt) => {
                    return (
                      <>
                        <p key={dt.id} className="name">Winner : {dt.firstname && dt.firstname} {dt.surname}</p>
                        <p className="motive">{dt.motivation}</p>

                      </>)
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
