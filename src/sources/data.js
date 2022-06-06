import React from 'react'
import { 
    FaEnvelope, FaLinkedin, FaTelegram, FaGithub, 
    FaReact, FaNodeJs, FaDocker,
    FaGlobeAmericas, FaEthereum 
} 
    from 'react-icons/fa'
import {
    DiDjango, DiHeroku, DiMongodb, DiPostgresql, DiRedis, DiNodejs, DiMysql
} from 'react-icons/di'

import {SiSolidity} from 'react-icons/si'


export const sideBar = {

}



export const skills = [


{    type: 'Frontend',
    languages: ['javascript'],
    frameworks: ['react'],
    libraries: [
    {name: 'basic-stack', image: require('../assets/img/front-stack.png')},
    {name: 'boostrap', image: require('../assets/img/front-bootstrap-transparent.png')},
    {name: 'react', image: require('../assets/img/frontend-react-logo-transparent.png')},
    {name: 'redux', image: require('../assets/img/front-redux.png')},
    {name: 'axios', image: require('../assets/img/front-axios.png')},
    {name: 'web3js', image: require('../assets/img/front-web3js.png')},
    {name: 'ethersjs', image: require('../assets/img/front-ethersjs.png')},
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
        {name: 'node', image: require('../assets/img/backend-node-transparent.png')},        
        {name: 'typescript', image: require('../assets/img/typescript.png')},
        {name: 'solidity', image: require('../assets/img/backend-solidity.png')},
        {name: 'hardhat', image: require('../assets/img/backend-hardhat.jpg')},
        {name: 'django', image: require('../assets/img/backend-django.png')},
        {name: 'rest framework', image: require('../assets/img/backend-drf-transparent.png')},
        {name: 'express', image: require('../assets/img/backend-express.png')},
        {name: 'channels', image: require('../assets/img/backend-channels.png')},
        {name: 'socket.io', image: require('../assets/img/socket-io.png')},
        {name: 'celery', image: require('../assets/img/backend-celery.png')},
        {name: 'postgres', image: require('../assets/img/backend-postgres-transparent.png')},
        {name: 'mysql', image: require('../assets/img/backend-mysql-transparent.png')},
        {name: 'mongodb', image: require('../assets/img/backend-mongo-transparent.png')},
        {name: 'redis', image: require('../assets/img/backend-redis-transparent.png')},
        {name: 'jwt', image: require('../assets/img/jwt.png')},

]
},

 {
    type: 'DevOps & Other',
    languages: ['languege'],
    frameworks: ['frameworks'],
    libraries: [
        {name: 'nginx', image: require('../assets/img/other-nginx.png')},
        {name: 'apache', image: require('../assets/img/other-apache.png')},
        {name: 'docker', image: require('../assets/img/other-docker.png')},
        {name: 'docker-compose', image: require('../assets/img/other-compose.png')},
        {name: 'jenkins', image: require('../assets/img/other-jenkins.png')},
        {name: 'ansible', image: require('../assets/img/other-ansible.png')},        
        {name: 'linux', image: require('../assets/img/other-linux.png')},
        {name: 'freebsd', image: require('../assets/img/other-freebsd.png')},
        {name: 'bash', image: require('../assets/img/other-bash-transparent.png')},
        {name: 'zimbra', image: require('../assets/img/other-zimbra.jpg')},
        {name: 'xenserver', image: require('../assets/img/other-xenserver.png')},

    
    ]

 }
]


export const portfolio = [
    {
        project: 'Pixel Invaderz',
        repo:  
                <>
                <a href='https://github.com/alenq1/nftMintDapp'>
                <FaGithub className='ml-5' size='1.5em'/>
                </a>
                <a href='https://nft-mint-dapp-beta.vercel.app/'>
                <FaGlobeAmericas className='ml-5' size='1.5em'/>
                </a>
                </>
                ,
        stack: [<FaReact className='ml-3' size='2.5em'/>,             
                <FaNodeJs className='ml-3' size='2.5em'/>,
                <SiSolidity className='ml-3' size='2.5em'/>,
                <FaEthereum className='ml-3' size='2.5em'/>,
                
        ],
        description: [
            'Decentrlized Mint NFT app',
            'Solidity Smart Contract EVM compatible(Ethereum, Polygon)',
            'Hardhat for contract deploy and testing',
            'Using React and EtherJS on frontend',
            'Owner Wallet customize supply, price, maxmint',
            'Contract State pattern Oriented',
            'Unreveal support',
            'Metadata and image built with hashlips art engine'
    ],
        images: [
            require('../assets/img/mint1.png'),
            require('../assets/img/mint2.png')
        ]
    
    },
    {
        project: 'XERN Dockerized',
        repo: <a href='https://github.com/alenq1/XERN-Dockerized'>
                <FaGithub className='ml-5' size='1.5em'/>
                </a>,
        stack: [<FaReact className='ml-3' size='2.5em'/>, 
                <FaDocker className='ml-3' size='2.5em'/>,
                <FaNodeJs className='ml-3' size='2.5em'/>,
                <DiMongodb className='ml-3' size='2.5em'/>,
                <DiPostgresql className='ml-3' size='2.5em'/>,
                <DiMysql className='ml-3' size='2.5em'/>,
    
                
                ],
        description: [
            'Microservice-oriented deploy',
            'Docker-compose build and deploy',
            'For fast developmentet start',
            'Use redux, thunk, and other React libraries',
            'Express for api backend controller routes and models',
            'Socket.io for real time data, bull queue tasks, and redis',
            'CRUD tasks, Mongodb and sql databases (Mysql Postgres)',
            'Authentication and Authorization with JWT',
            'Service checks page'
    ],
        images: [
            'https://static.platzi.com/media/blog/mern-stack-284eedb6-ee6b-4441-b181-5064a453a15a.png',
            'https://www.onlogic.com/company/io-hub/wp-content/uploads/2013/07/socket-io-logo.jpg',
            'https://www.freecodecamp.org/news/content/images/2019/07/1_JK4VDnsrF6YnAb2nyhMsdQ.png',
            'https://miro.medium.com/max/365/1*Jr3NFSKTfQWRUyjblBSKeg.png'        
        ]
    
    },
    {
        project: 'React-Django Dockerized',
        repo: <a href='https://github.com/alenq1/react-django-dockerized/'>
                <FaGithub className='ml-5' size='1.5em'/>
                </a>,
        stack: [<FaReact className='ml-3' size='2.5em'/>, 
                <DiDjango className='ml-3' size='2.5em'/>,
                <FaDocker className='ml-3' size='2.5em'/>,
                <DiRedis className='ml-3' size='2.5em'/>
            ],
        description: [
            'Microservice-oriented deploy',
            'Docker-compose build and deploy',
            'For fast developmentet start',
            'Use redux, thunk, and other esential libraries',
            'On backend side, websocket, celery tasks, and redis',
            'Service checks page'
    ],
        images: [
            'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
            'https://www.django-rest-framework.org/img/logo.png',
            'https://www.freecodecamp.org/news/content/images/2019/07/1_JK4VDnsrF6YnAb2nyhMsdQ.png',
            
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
        ]
    
    },
    {
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
    stack: [<FaReact className='ml-3' size='2.5em'/>, 
            <DiDjango className='ml-3' size='2.5em'/>,
            <DiPostgresql className='ml-3' size='2.5em'/>
            ],
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
    },
    {
    project: 'CryptoCenter',
    repo: <a href='https://github.com/alenq1/cryptoweb/'>
            <FaGithub className='ml-3' size='1.5em'/>
        </a>,
    stack: [<FaReact className='ml-3' size='2.5em'/>, 
            <DiDjango className='ml-3' size='2.5em'/>,
            <FaDocker className='ml-3' size='2.5em'/>,
            ],
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
        ]},
    ]

}

export const contact = [

{type: 'mail', link: 'mailto:jandroenq@gmail.com', image: <FaEnvelope/>},
{type: 'linkedin', link: 'https://www.linkedin.com/in/alejandro-e-castellanos-m-765b40155/', image: <FaLinkedin/>},
{type: 'github', link: 'https://github.com/alenq1/', image: <FaGithub/>},
{type: 'telegram', link: 'https://t.me/jandroenq', image: <FaTelegram/>}


]