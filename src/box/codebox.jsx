import Stylebox from "./staylebox.module.css";
function Box({ title }) {
  return (
    <div >

      <div className={Stylebox.boxwrapper}>
        <img src={title.imgUrl}  />
      </div>
      <div className={Stylebox.label}>
        <h2> {title.title} </h2>
      </div>

    </div>
  );
}
export default Box;
