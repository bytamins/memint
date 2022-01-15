const PageTitle = ({ title, description }) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 text-center mb-5">
        <h1>{title}</h1>
        <p>{description}</p>
        <hr />
      </div>
    </div>
  );
};

export default PageTitle;
