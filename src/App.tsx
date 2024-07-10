import { Box, Image, Heading, Text, Flex } from 'rebass';
import './App.css';

function calculateAge() {
  const birthDate = new Date('01-11-1993');
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
}

function App() {
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
          // border: '1px solid blue',
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
            <a href="https://read.cv/rashad">» CV</a>
            <Text
              sx={{
                color: '#bababa',
                marginTop: [1],
                display: ['none', 'block'],
              }}
            >
              My resumé or curriculum vitae.
            </Text>
          </Text>

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
            <a href="https://twitter.com/ra0x03">» Twitter</a>
            <Text
              sx={{
                color: '#bababa',
                marginTop: [1],
                display: ['none', 'block'],
              }}
            >
              My failed attempts to be an influencer.
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
              not known for his work in ad-tech{' '}
              <a href="https://en.wikipedia.org/wiki/Network_security">
                network protection
              </a>
              , and{' '}
              <a href="https://en.wikipedia.org/wiki/Blockchain">blockchain</a>.
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
              company, most notably
              <a href="https://en.wikipedia.org/wiki/Sprint_Corporation">
                {' '}
                Sprint
              </a>
              . Rashad attended{' '}
              <a href="https://en.wikipedia.org/wiki/North_Carolina_State_University">
                North Carolina State University
              </a>{' '}
              graduating Magna Cum Laude in 2016 with a B.A. in Communication,
              having played varsity{' '}
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
              he learned some of the difficulties that come with working at such
              a huge scale. After a few years at Yahoo!, Rashad went on the work
              in B2B software, helping building cloud-based software for
              auditors at{' '}
              <a href="https://www.auditboard.com/about-us/">Auditboard</a>.
              <br />
              <br />
              After a few years in enterprise software, Rashad moved on to his
              first formal role in the cryptocurrency industry, working as a
              Senior Software Engineer for{' '}
              <a href="https://www.opennode.com/">Opennode</a>, where he was
              responsible for building out the payments infrastructure for the
              company.
              <br />
              <br />
              Shortly after his stint at Opennode, Rashad went on to work at
              DuckDuckGo, where he worked on the same type of network protection
              problems that he was first introduced to at Yahoo!. After a few
              years at DuckDuckGo, Rashad signed on to work at{' '}
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
              painting and playing piano when he has the time.
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
                src="https://i.imgur.com/9X0kDn3.jpeg"
                width={[200]}
                height={[300]}
              />
              <Text sx={{ fontFamily: 'Arial', fontSize: 12, marginTop: [1] }}>
                Rashad being a guy (2023).
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
                      {calculateAge()}) <br /> Nashville, North Carolina, U.S.
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
                      <br />
                      <br />{' '}
                      <a href="https://en.wikipedia.org/wiki/Artist">Artist</a>
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
                    <Text sx={{ fontFamily: 'Arial', fontSize: 13 }}></Text>
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
}

export default App;
