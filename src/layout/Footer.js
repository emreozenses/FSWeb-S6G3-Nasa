const Footer = ({pictureData}) => {
  return <div className="footer">
    <p id="copyright">Copyright @ {pictureData.copyright}</p>
  </div>;
};

export default Footer;
