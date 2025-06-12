import GmailButton from "./GmailButton";
import GMessage from "./GMessage";

const Gmail = () => {
  return (
    <div className="container">
      <div className="row">
        {/* sidebar */}
        <div className="col-sm-12 col-md-4 col-lg-4 bg-info" style={{height:"100vh"}}>
          <h3>Gmail</h3>
          <GmailButton name="inbox" icon="🀄" c="bg-success btn-lg  " />
          <GmailButton name="starred" icon="🀄" c="bg-info " />
          <GmailButton name="snoozed" icon="🀄" c="bg-secondary " />
          <GmailButton name="sent" icon="🀄" c="bg-warning " />
          <GmailButton name="draft" icon="🀄" c="bg-warning " />
          <GmailButton name="important" icon="🀄" c="bg-warning " />
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <GMessage icon="⭐" name="vivek" content="unable attend the class-" time="2 jun" c="bg-warning" imp={false} />
        </div>
      </div>
    </div>
  );
};

export default Gmail;
