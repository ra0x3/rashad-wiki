import { Box, Image, Heading, Text, Flex, Button } from 'rebass';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

const MY_AGE = 32;

const calculateAge = () => {
  const birthDate = new Date('01-11-1993');
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
};

const IndexView: React.FC = (): React.JSX.Element => {
  return (
    <Flex
      sx={{
        width: ['100%', 1200],
        flexDirection: 'column',
        justifyContent: ['center'],
        alignItems: ['center'],
        // border: '1px solid yellow',
        margin: ['auto'],
      }}
    >
      <Image src="https://i.imgur.com/XOG1plK.png" width={['100%']} />
      <Flex
        sx={{
          flexDirection: ['column', 'row'],
          width: ['100%'],
        }}
      >
        <Flex
          sx={{
            width: ['100%', 350],
            height: [, 700],
            flexDirection: ['row', 'column'],
            paddingLeft: [, 50],
            justifyContent: ['space-evenly', 'flex-start'],
            //   border: '1px solid pink',
          }}
        >
          <Text sx={{ fontFamily: 'Arial', fontSize: 13, marginTop: [20] }}>
            <a href="https://linkedin.com/in/rashad-alston">» LinkedIn</a>
            <br />
            <Text
              sx={{
                color: '#bababa',
                marginTop: [1],
                display: ['none', 'block'],
              }}
            >
              For those unfortunate enough to use LinkedIn.
            </Text>
          </Text>

          <Text sx={{ fontFamily: 'Arial', fontSize: 13, marginTop: [20] }}>
            <a href="https://github.com/ra0x3">» Github</a>
            <Text
              sx={{
                color: '#bababa',
                marginTop: [1],
                display: ['none', 'block'],
              }}
            >
              Public code I've written.
            </Text>
          </Text>
          <Text sx={{ fontFamily: 'Arial', fontSize: 13, marginTop: [20] }}>
            <a href="https://calendly.com/ra0x3/meet-n-greet">» Calendly</a>

            <Text
              sx={{
                color: '#bababa',
                marginTop: [1],
                display: ['none', 'block'],
              }}
            >
              Book some time with me
            </Text>
          </Text>

          {/*
          <Text sx={{ fontFamily: 'Arial', fontSize: 13, marginTop: [20] }}>
            <a href="https://linktr.ee/rashad.wiki">» Linktree</a>
            <Text
              sx={{
                color: '#bababa',
                marginTop: [1],
                display: ['none', 'block'],
              }}
            >
              Linktree
            </Text>
          </Text>

          <Text sx={{ fontFamily: 'Arial', fontSize: 13, marginTop: [20] }}>
            <a href="https://libx.stream">» LibX</a>
            <Text
              sx={{
                color: '#bababa',
                marginTop: [1],
                display: ['none', 'block'],
              }}
            >
              A tool I built to export your Spotify library.
            </Text>
          </Text>
          <Text sx={{ fontFamily: 'Arial', fontSize: 13, marginTop: [20] }}>
            <a href="/blog">» Blog</a>
            <Text
              sx={{
                color: '#bababa',
                marginTop: [1],
                display: ['none', 'block'],
              }}
            >
              Read my conversations with ChatGPT
            </Text>
            </Text>*/}
        </Flex>
        <Flex
          sx={{
            width: ['100%', 1200],
            flexDirection: ['column', 'row'],
            alignItems: ['center', 'center'],
            justifyContent: ['center', 'center'],
            // border: '1px solid green',
          }}
        >
          <Flex
            sx={{
              width: ['90%', 700],
              padding: 20,
              flexDirection: 'column',
              // border: '1px solid red',
            }}
          >
            <Heading sx={{ fontFamily: 'Nanum Myeongjo', fontSize: [30] }}>
              Rashad Alston
            </Heading>
            <Box
              sx={{ height: 1, width: '100%', backgroundColor: '#BABABA' }}
            ></Box>
            <Text
              sx={{
                fontFamily: 'Arial',
                marginTop: [25],
                lineHeight: [1.5],
                fontSize: 14,
              }}
            >
              <strong>Rashad Abdullah Alston رشاد عبدالله</strong> (born 11
              January 1993) Is an American{' '}
              <a href="https://en.wikipedia.org/wiki/Software_development">
                software developer
              </a>{' '}
              known for his work in ad-tech{' '}
              <a href="https://en.wikipedia.org/wiki/Network_security">
                network protection
              </a>
              , and{' '}
              <a href="https://simple.wikipedia.org/wiki/Cybersecurity">
                cybersecurity
              </a>
              .
            </Text>
            <Heading
              sx={{
                fontFamily: 'Nanum Myeongjo',
                fontSize: [24],
                marginTop: 30,
              }}
            >
              Early life and education
            </Heading>
            <Box
              sx={{ height: 1, width: '100%', backgroundColor: '#BABABA' }}
            ></Box>
            <Text
              sx={{
                fontFamily: 'Arial',
                marginTop: [20],
                lineHeight: [1.5],
                fontSize: 14,
              }}
            >
              Rashad was born in{' '}
              <a href="https://en.wikipedia.org/wiki/Nashville,_North_Carolina">
                Nashville, North Carolina
              </a>{' '}
              on January 11th, 1993 to Brian and Patricia Alston. His father
              worked various jobs before taking a job at the local{' '}
              <a href="https://en.wikipedia.org/wiki/Firestone_Tire_and_Rubber_Company">
                Firestone
              </a>{' '}
              plant, while his mother worked several jobs at the local phone
              company, most notably{' '}
              <a href="https://en.wikipedia.org/wiki/Sprint_Corporation">
                Sprint
              </a>
              . Rashad attended{' '}
              <a href="https://en.wikipedia.org/wiki/North_Carolina_State_University">
                North Carolina State University
              </a>{' '}
              graduating Magna Cum Laude in 2016 with a B.A., having played
              varsity{' '}
              <a href="https://en.wikipedia.org/wiki/Rugby_union">rugby</a> for
              the university in each year of his undergraduate study.
            </Text>
            <Heading
              sx={{
                fontFamily: 'Nanum Myeongjo',
                fontSize: [24],
                marginTop: 30,
              }}
            >
              Career
            </Heading>
            <Box
              sx={{ height: 1, width: '100%', backgroundColor: '#BABABA' }}
            ></Box>
            <Text
              sx={{
                fontFamily: 'Arial',
                marginTop: [20],
                lineHeight: [1.5],
                fontSize: 14,
              }}
            >
              After graduating from North Carolina State University, Rashad went
              to work in software - even though he did not obtain a traditional
              B.S. in Computer Science. During his last few years of
              undergraduate study, Rashad moonlighted studying programming and
              software development.
              <br />
              <br /> Rashad's first job involved working in{' '}
              <a href="https://en.wikipedia.org/wiki/Network_security">
                network protection
              </a>{' '}
              at <a href="https://en.wikipedia.org/wiki/Yahoo!">Yahoo!</a> where
              he gained firsthand experience tackling abuse and adversarial
              behavior at massive scale. After several years at Yahoo!, he
              transitioned into enterprise software, helping build tools for
              internal auditors at{' '}
              <a href="https://www.auditboard.com/about-us/">Auditboard</a>.
              <br />
              <br />
              Shortly after his stint at Auditboard, Rashad went on to work at{' '}
              <a href="https://en.wikipedia.org/wiki/DuckDuckGo">DuckDuckGo</a>,
              where he worked on the same type of network protection problems
              that he was first introduced to at Yahoo! with a greater emphasis
              on user privacy and ethical data stewardship. After a few years at
              DuckDuckGo, Rashad signed on to work at{' '}
              <a href="https://www.fuel.network/">Fuel Labs</a> where he worked
              as a team lead for the company's{' '}
              <a href="https://wiki.tezosagora.org/build/blockchain-indexers">
                blockchain indexing
              </a>{' '}
              infrastructure. Notably, the{' '}
              <a href="https://github.com/FuelLabs/fuel-indexer">
                Fuel Indexer
              </a>{' '}
              project is considered by many to be one of the fastest, most
              flexible blockchain indexers in the industry.
              <br />
              <br />
              In 2024, Rashad joined <a href="https://soteri.io/">Soteri</a>, a
              cybersecurity startup focused on enterprise-grade threat detection
              and automated defense, where he continues to develop
              infrastructure for securing modern networks against increasingly
              sophisticated threats.
            </Text>
            <Heading
              sx={{
                fontFamily: 'Nanum Myeongjo',
                fontSize: [24],
                marginTop: 30,
              }}
            >
              Personal Life
            </Heading>
            <Box
              sx={{ height: 1, width: '100%', backgroundColor: '#BABABA' }}
            ></Box>
            <Text
              sx={{
                fontFamily: 'Arial',
                marginTop: [20],
                lineHeight: [1.5],
                fontSize: 14,
              }}
            >
              In May 2016, Rashad moved from Raleigh North Carolina to Riverside
              California, eventually settling in Los Angeles California. Rashad
              is also an avid practitioner of the visual and performing arts -
              painting and playing guitar when he has the time.
            </Text>
          </Flex>
          <Flex
            sx={{
              // border: '1px solid black',
              flexDirection: 'column',
              width: [350, 300],
              alignItems: 'center',
              marginTop: [, 100],
            }}
          >
            <Flex
              sx={{
                border: '1px solid #BABABA',
                marginTop: [30],
                marginBottom: [30],
                paddingTop: [15],
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: '#F8F9FA',
                width: ['100%'],
              }}
            >
              <Text sx={{ fontWeight: 'bold', marginBottom: [10] }}>
                Rashad Alston
              </Text>
              <Image
                src="https://i.imgur.com/bUPydVj.jpeg"
                width={[200]}
                height={[300]}
              />
              <Text sx={{ fontFamily: 'Arial', fontSize: 12, marginTop: [1] }}>
                Rashad being a guy (2025).
              </Text>
              <Flex
                sx={{
                  width: [, '100%'],
                  padding: [10],
                  marginTop: [10],
                  flexDirection: 'column',
                }}
              >
                <Flex
                  sx={{
                    justifyContent: 'space-between',
                    width: ['100%'],
                  }}
                >
                  <Flex sx={{ width: ['50%'] }}>
                    <Text
                      sx={{
                        fontFamily: 'Arial',
                        fontWeight: 'bold',
                        fontSize: 13,
                      }}
                    >
                      Born
                    </Text>
                  </Flex>
                  <Flex
                    sx={{
                      width: ['50%'],
                    }}
                  >
                    <Text sx={{ fontFamily: 'Arial', fontSize: 13 }}>
                      Rashad Abdullah Alston <br /> 11 January 1993 <br /> (age{' '}
                      {calculateAge() || MY_AGE}) <br /> Nashville, North
                      Carolina, U.S.
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  sx={{
                    justifyContent: 'space-between',
                    width: ['100%'],
                    marginTop: [20],
                  }}
                >
                  <Flex sx={{ width: ['50%'] }}>
                    <Text
                      sx={{
                        fontFamily: 'Arial',
                        fontWeight: 'bold',
                        fontSize: 13,
                      }}
                    >
                      Occupations
                    </Text>
                  </Flex>
                  <Flex
                    sx={{
                      width: ['50%'],
                    }}
                  >
                    <Text sx={{ fontFamily: 'Arial', fontSize: 13 }}>
                      <a href="https://en.wikipedia.org/wiki/Software_engineering">
                        Software Engineer
                      </a>{' '}
                      <br />{' '}
                      <a href="https://en.wikipedia.org/wiki/Artist">Artist</a>{' '}
                      <br />{' '}
                      <a href="https://en.wikipedia.org/wiki/Musician">
                        Musician
                      </a>{' '}
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  sx={{
                    justifyContent: 'space-between',
                    width: ['100%'],
                    marginTop: [20],
                  }}
                >
                  <Flex sx={{ width: ['50%'] }}>
                    <Text
                      sx={{
                        fontFamily: 'Arial',
                        fontWeight: 'bold',
                        fontSize: 13,
                      }}
                    >
                      Family
                    </Text>
                  </Flex>
                  <Flex
                    sx={{
                      width: ['50%'],
                    }}
                  >
                    <Text sx={{ fontFamily: 'Arial', fontSize: 13 }}>
                      <a href="https://www.brynmawr.edu/inside/people/alex-alston">
                        Alexander Alston
                      </a>
                      <br />
                      <a href="https://www.linkedin.com/in/aerialalston/">
                        Aerial Alston
                      </a>
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  sx={{
                    justifyContent: 'space-between',
                    width: ['100%'],
                    marginTop: [20],
                  }}
                >
                  <Flex sx={{ width: ['50%'] }}>
                    <Text
                      sx={{
                        fontFamily: 'Arial',
                        fontWeight: 'bold',
                        fontSize: 13,
                      }}
                    >
                      Signature
                    </Text>
                  </Flex>
                  <Flex
                    sx={{
                      width: ['50%'],
                    }}
                  >
                    <Image src="https://i.imgur.com/cR5KQdv.png" />
                  </Flex>
                </Flex>
                <Flex
                  sx={{
                    justifyContent: 'space-between',
                    width: ['100%'],
                    marginTop: [20],
                  }}
                >
                  <Flex sx={{ width: ['50%'] }}>
                    <Text
                      sx={{
                        fontFamily: 'Arial',
                        fontWeight: 'bold',
                        fontSize: 13,
                      }}
                    >
                      Website
                    </Text>
                  </Flex>
                  <Flex
                    sx={{
                      width: ['50%'],
                    }}
                  >
                    <Text sx={{ fontFamily: 'Arial', fontSize: 13 }}>
                      <a href="https://rashad.wiki">https://rashad.wiki</a>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Image src="https://i.imgur.com/UzSPclM.png" width={['100%']} />
      </Flex>
    </Flex>
  );
};

const BlogView: React.FC = (): React.JSX.Element => {
  const data = [
    {
      title: "ra0x1: Shazam Can't Ear It Like I Can",
      description:
        "Why can I recognize distant concert songs but Shazam can't?",
      readTime: '3 min',
      link: 'https://chatgpt.com/share/97d0105a-7823-4cf9-81e2-8a140de6ee58',
    },
    {
      title: 'ra0x2: So You Think You Can Interview?',
      description: 'Contextualizing the notorious software engineer interview',
      readTime: '2 min',
      link: 'https://chatgpt.com/share/e2dc9cbd-bd2b-448b-975e-27c9bd2b10e4',
    },
  ];

  return (
    <Flex
      sx={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: [4, 20],
      }}
    >
      <Flex
        sx={{
          width: ['100%', '50%'],
          height: '100%',
          padding: [2, 20],
          flexDirection: 'column',
          alignItems: 'center',
          overflowY: 'auto',
        }}
      >
        <Heading
          sx={{ textAlign: 'center', fontFamily: 'Arial', marginBottom: [10] }}
        >
          Conversations with ChatGPT
        </Heading>
        {data.map((item) => {
          return (
            <Flex
              sx={{
                marginTop: 10,
                width: '100%',
                border: '1px solid #cbcbcb',
                padding: [4, 20],
                flexDirection: 'column',
              }}
            >
              <Heading sx={{ fontFamily: 'Arial' }}>{item.title}</Heading>
              <Text
                sx={{
                  fontFamily: 'Arial',
                  fontSize: [14],
                  marginTop: [2],
                  marginBottom: [2],
                }}
              >
                {item.description}
              </Text>
              <Button
                onClick={() => {
                  window.open(item.link, '_blank');
                }}
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  fontFamily: 'Arial',
                  width: '50%',
                  margin: 'auto',
                  '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: 'white',
                    color: 'black',
                    border: '1px solid black',
                  },
                }}
              >
                {item.readTime} read
              </Button>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

interface AppRouterProps {
  children?: React.ReactNode;
}

const AppRouter = ({ children }: AppRouterProps): React.JSX.Element => {
  return (
    <Router>
      {children}
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="/blog" element={<BlogView />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
