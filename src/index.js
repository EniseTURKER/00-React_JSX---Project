let isimler = ["Ali", "Veli", "Ayse"];
let arr=["Tebrikler","React Harika"]

ReactDOM.render(
    <div>
  <div className="card">
    <h1>Hello Word</h1>
    <ol>

    {isimler.map((item,index) => (
        <li key={index} className={index===0?"first":index===1?"second":"third"}>{item}</li>

    ))}
    </ol>
    </div>
    <div>
    <h2>{arr[0]}</h2>
    <h3>{arr[1]}</h3>
    </div>
  </div>,
  document.getElementById("example")
);
