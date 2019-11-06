import React from 'react'
import { FaEnvelope, FaLinkedin, FaTelegram, FaGithub, FaReact,  } from 'react-icons/fa'
import {DiDjango, DiHeroku} from 'react-icons/di'


export const sideBar = {

}



export const skills = [


{    type: 'Frontend',
    languages: ['javascript'],
    frameworks: ['react'],
    libraries: [
    {name: 'basic-stack', image: require('../assets/img/front-stack.png')},
    {name: 'boostrap', image: require('../assets/img/front-bootstrap.png')},
    {name: 'react', image: require('../assets/img/front-react.png')},
    {name: 'redux', image: require('../assets/img/front-redux.png')},
    {name: 'axios', image: require('../assets/img/front-axios.png')},
    {name: 'react-echarts', image: require('../assets/img/front-echarts2.png')},
    {name: 'react-leaflet', image: require('../assets/img/front-leaflet.png')},
                ],


},
{
    type: 'Backend',
    languages: ['python', 'bash'],
    frameworks: ['django'],
    libraries: [
        {name: 'python', image: require('../assets/img/backend-python.png')},
        {name: 'django', image: require('../assets/img/backend-django.png')},
        {name: 'rest framework', image: require('../assets/img/backend-drf.png')},
        {name: 'channels', image: require('../assets/img/backend-channels.png')},
        {name: 'celery', image: require('../assets/img/backend-celery.png')},
        {name: 'postgres', image: require('../assets/img/backend-postgres.png')},
        {name: 'mysql', image: require('../assets/img/backend-mysql.png')},
        {name: 'redis', image: require('../assets/img/backend-redis.png')},
        {name: 'beautifulSoup', image: require('../assets/img/backend-bs4.png')},

]
},

 {
    type: 'DevOps, Sysadmin, & Other',
    languages: ['languege'],
    frameworks: ['frameworks'],
    libraries: [
        {name: 'nginx', image: require('../assets/img/other-nginx.png')},
        {name: 'apache', image: require('../assets/img/other-apache.png')},
        {name: 'docker', image: require('../assets/img/other-docker.png')},
        {name: 'docker-compose', image: require('../assets/img/other-compose.png')},
        {name: 'jenkins', image: require('../assets/img/other-jenkins.png')},
        {name: 'ansible', image: require('../assets/img/other-ansible.png')},        
        {name: 'linux', image: require('../assets/img/other-linux.jpeg')},
        {name: 'freebsd', image: require('../assets/img/other-freebsd.png')},
        {name: 'bash', image: require('../assets/img/other-bash.jpg')},
        {name: 'zimbra', image: require('../assets/img/other-zimbra.jpg')},
        {name: 'xenserver', image: require('../assets/img/other-xenserver.png')},

    
    ]

 }
]


export const portfolio = [{
    project: 'Reactango-api-crud',
    repo:   <>
            <a href='https://github.com/alenq1/reactango-api-crud/'>
            <FaGithub className='ml-3' size='1.5em'/>
            </a>
            <a href='https://reactango-api-crud.herokuapp.com/'>
            <DiHeroku className='ml-3' size='1.5em'/>
            </a>
            </>
            ,
    stack: [<FaReact className='ml-3' size='2.5em'/>, <DiDjango className='ml-3' size='2.5em'/>],
    description: [
        'App  for learning purposes',
        'Display dashboard and Menu sections',
        'Auth and access with JWT',
        'Perform CRUD operations from Backend',
        'Display Graphics handled by database',
        'Show map geographical position from external api calls',
        'Displays weather info and displays picture from external api calls'
    
    ],
    images: [
        require('../assets/img/rapc.jpg'),
        require('../assets/img/rapc2.jpg'),
        require('../assets/img/rapc3.jpg'),
        require('../assets/img/rapc4.jpg'),
        
    ]
},{
    project: 'CryptoCenter',
    repo: <a href='https://github.com/alenq1/cryptoweb/'>
            <FaGithub className='ml-3' size='1.5em'/>
        </a>,
    stack: [<FaReact className='ml-3' size='2.5em'/>, <DiDjango className='ml-3' size='2.5em'/>],
    description: [
        'App for learning purposes', 
        'Use redux store, selectors and thunk',
        'Display data related to cryptocurrencies world',
        'Change Customized theme',
        'Scheduled tasks on backend to perform concurrent requests',
        'Scraping data to sites with keywords',
        'Stream data onto websocket channels to sent to front',
        'Deploy setup with docker-compose',
        'Microservice oriented architecture'



],
    images: [
        require('../assets/img/Cryc.jpg'),
        require('../assets/img/Cryc2.jpg'),
        require('../assets/img/Cryc3.jpg'),
        require('../assets/img/Cryc4.jpg'),
        require('../assets/img/Cryc5.jpg'),
    ]

},
{
    project: 'Personal Site',
    repo: <a href='https://github.com/alenq1/my-site'>
            <FaGithub className='ml-5' size='1.5em'/>
            </a>,
    stack: [<FaReact className='ml-3' size='2.5em'/>],
    description: [
        'Just React',
        'Centralized data to display',
        'Using react-reveal for animations',
        'Uploaded to github pages',
        'Responsive'
],
    images: [
        require('../assets/img/page1.png'),
        require('../assets/img/page2.png'),
        require('../assets/img/page3.png'),
        
    ]

}
]

export const experience = {

    title: 'Work and Self-Taught experience',
    types: [
        {
            name: 'General Administration',
        description: [
        'Management of administrative processes',
        'Procedural analysis about administrative management',
        'Administrative processes Automation'
        ]},
        {
            name: 'Hardware Skills',
        description: [
        'Technical Support',    
        'Diagnosis and Repair on Workstations, and Servers',
        'Performance Optimization'
        ]},
        {
            name: 'OnPremise Infraestructure Admin',
        description: [
        'Network management, Firewall, VLAN, NAT, Routing, Qos',
        'Virtualization Hypervisors Management',
        'Storage Management, DAS, NAS, SAN',
        'Service Management, Webservers, Proxies, MailServers, DataBases, LoadBalancing',
        'Monitoring Management, Bash scripts, CronTabs, syslogs, snmp',
        ]},
        {
            name: 'Security',
        description: [
        'Perimetral, Physical and Logic (DataCenter Tier Levels)',
        'Hardening for Operative Systems and webservices',
        'Firewall Rules Access'


        ]},
        {
            name: 'Languages',
        description: [
        'Spanish (Native)',
        'English (Conversational)',
        'Chinese Mandarin (Basic Communication)'

        ]},
    ]

}

export const contact = [

{type: 'mail', link: 'mailto:jandroenq@gmail.com', image: <FaEnvelope/>},
{type: 'linkedin', link: 'https://www.linkedin.com/in/alejandro-e-castellanos-m-765b40155/', image: <FaLinkedin/>},
{type: 'github', link: 'https://github.com/alenq1/', image: <FaGithub/>},
{type: 'telegram', link: 'https://t.me/jandroenq', image: <FaTelegram/>}


]