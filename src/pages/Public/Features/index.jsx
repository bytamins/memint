import PageTitle from "../../../components/PageTitle";

const Features = () => {
  return (
    <div className="container mt-5">
      <PageTitle
        title="Features"
        description="Learn more about our functionality."
      />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <ul>
            <li>Add tests</li>
            <li>More transaction history + analytics.</li>
            <li>Better onboarding (collect more info, suggest more NFTs)</li>
            <li>
              Implement KYC (prevent someone claiming to be Taylor Swift).
            </li>
            <li>Verified Badges</li>
            <li>Mint/Send to Friend: mint_to_address</li>
            <li>Friends Functionality</li>
            <li>Tags Functionality #anniversary #wendys</li>
            <li>Consider launching new contract/collection for each user.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
