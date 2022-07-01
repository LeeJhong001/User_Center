import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = 'GBX_Lee出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'C4',
          title: 'C4-Competition',
          href: 'http://net.c4best.cn',
          blankTarget: true,
        },
        {
          key: 'GBX',
          title: 'GBX_Lee',
          href: 'http://net.c4best.cn/competition/team/10254678/10689?page=1',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />GBX_Lee Github</>,
          href: 'https://github.com/LeeJhong001',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
