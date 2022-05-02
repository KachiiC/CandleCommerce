import {
  InstagramFilled,
  FacebookFilled,
  TwitterCircleFilled
} from '@ant-design/icons';

const FootIcon = {
  fontSize: '60px',
  margin: '40px',
  cursor: 'pointer',
  color: '#747474'
};

const FooterLinksData = [
  {
    link: 'https://www.instagram.com/',
    icon: <InstagramFilled style={FootIcon} />
  },
  {
    link: 'https://www.facebook.com/',
    icon: <FacebookFilled style={FootIcon} />
  },
  {
    link: 'https://www.twitter.com/',
    icon: <TwitterCircleFilled style={FootIcon} />
  }
];

const FooterLinks = () => {
  return (
    <>
      {FooterLinksData.map(obj => (
        <a href={obj.link} target="_blank" rel="noreferrer" key={obj.link}>
          {obj.icon}
        </a>
      ))}
    </>
  );
};

export default FooterLinks;
