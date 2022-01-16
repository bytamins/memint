import PageTitle from "../../../components/PageTitle";

const Roadmap = () => {
  return (
    <div className="container mt-5">
      <PageTitle
        title="Roadmap"
        description="Here's what's coming in the near-term."
      />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Bug Fixes</h4>
          <ul>
            <li>OpenSea Metadata: Year + Day appear as "Levels" numbers.</li>
          </ul>
          <h4>New Features</h4>
          <ul>
            <li>Add tests</li>
            <li>Check for day NFT uniqueness (wallet x timestamp)</li>
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

export default Roadmap;
