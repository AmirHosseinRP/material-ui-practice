import PeopleIcon from '@mui/icons-material/People';
import DnsIcon from '@mui/icons-material/Dns';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';

export const mainNavbarItems = [
    {
        id:0,
        icon:<PeopleIcon/>,
        label:'Modal',
        route:'modal-page',
    },
    {
        id:1,
        icon:<DnsIcon/>,
        label:'Accordion',
        route:'accordion-page',
    },
    {
        id:2,
        icon:<ImageIcon/>,
        label:'Form',
        route:'form-page',
    },
    {
        id:3,
        icon:<PublicIcon/>,
        label:'Cookie',
        route:'cookie-page',
    },
    {
        id:4,
        icon:<SettingsEthernetIcon/>,
        label:'Bootstrap',
        route:'bootstrap-page',
    },
    {
        id:5,
        icon:<SettingsInputCompositeIcon/>,
        label:'Api',
        route:'api-page',
    }
]
