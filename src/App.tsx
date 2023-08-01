import { Box, Image, Heading, Text, Flex } from 'rebass';
import './App.css';

function App() {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Flex sx={{}}>
        <Image src="https://i.imgur.com/XOG1plK.png" width={['100%']} />
      </Flex>
      <Flex sx={{}}>
        <Flex
          sx={{
            width: 350,
            height: 700,
            flexDirection: 'column',
            paddingLeft: 50,
          }}
        >
          <Text sx={{ fontFamily: 'Arial', fontSize: 13, marginTop: [20] }}>
            <a href="https://read.cv/rashad">» CV</a>
            <Text sx={{ color: '#bababa', marginTop: [1] }}>
              My resumé or curriculum vitae.
            </Text>
          </Text>

          <Text sx={{ fontFamily: 'Arial', fontSize: 13, marginTop: [20] }}>
            <a href="https://linkedin.com/in/rashad-alston">» LinkedIn</a>
            <br />
            <Text sx={{ color: '#bababa', marginTop: [1] }}>
              For those unfortunate enought to use LinkedIn.
            </Text>
          </Text>

          <Text sx={{ fontFamily: 'Arial', fontSize: 13, marginTop: [20] }}>
            <a href="https://github.com/ra0x3">» Github</a>
            <Text sx={{ color: '#bababa', marginTop: [1] }}>
              Public code I've written.
            </Text>
          </Text>

          <Text sx={{ fontFamily: 'Arial', fontSize: 13, marginTop: [20] }}>
            <a href="https://twitter.com/ra0x03">» Twitter</a>
            <Text sx={{ color: '#bababa', marginTop: [1] }}>
              My failed attempts to be an influencer.
            </Text>
          </Text>
        </Flex>
        <Flex
          sx={{
            width: 1200,
            flexDirection: 'row',
          }}
        >
          <Flex
            sx={{
              width: 700,
              padding: 20,
              flexDirection: 'column',
            }}
          >
            <Heading sx={{ fontFamily: 'Nanum Myeongjo', fontSize: [30] }}>
              Rashad Alston
            </Heading>
            <Box
              sx={{ height: 1, width: '100%', backgroundColor: '#BABABA' }}
            ></Box>
            {/* <Flex sx={{ justifyContent: 'space-evenly', marginTop: [25] }}>

            </Flex> */}
            <Text
              sx={{
                fontFamily: 'Arial',
                marginTop: [25],
                lineHeight: [1.5],
                fontSize: 14,
              }}
            >
              <strong>Rashad Abdullah Alston رشاد عبدالله</strong> (born 11
              January 1993) Nam porta vulputate vestibulum. Fusce tincidunt
              pellentesque volutpat. Integer vel turpis diam. Donec eu ultricies
              nibh, nec sollicitudin urna. Nam sed lorem pellentesque, gravida
              turpis dapibus, rhoncus elit. Sed tristique laoreet nisi sed
              viverra. Nulla finibus ex nunc, sed dictum sem finibus ac.
            </Text>
            <Text
              sx={{
                fontFamily: 'Arial',
                marginTop: [20],
                lineHeight: [1.5],
                fontSize: 14,
              }}
            >
              Nam porta vulputate vestibulum. Fusce tincidunt pellentesque
              volutpat. Integer vel turpis diam. Donec eu ultricies nibh, nec
              sollicitudin urna. Nam sed lorem pellentesque, gravida turpis
              dapibus, rhoncus elit. Sed tristique laoreet nisi sed viverra.
              Nulla finibus ex nunc, sed dictum sem finibus ac.
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
              Nam porta vulputate vestibulum. Fusce tincidunt pellentesque
              volutpat. Integer vel turpis diam. Donec eu ultricies nibh, nec
              sollicitudin urna. Nam sed lorem pellentesque, gravida turpis
              dapibus, rhoncus elit. Sed tristique laoreet nisi sed viverra.
              Nulla finibus ex nunc, sed dictum sem finibus ac.
            </Text>
            <Heading
              sx={{
                fontFamily: 'Nanum Myeongjo',
                fontSize: [24],
                marginTop: 30,
              }}
            >
              Software Career
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
              Nam porta vulputate vestibulum. Fusce tincidunt pellentesque
              volutpat. Integer vel turpis diam. Donec eu ultricies nibh, nec
              sollicitudin urna. Nam sed lorem pellentesque, gravida turpis
              dapibus, rhoncus elit. Sed tristique laoreet nisi sed viverra.
              Nulla finibus ex nunc, sed dictum sem finibus ac.
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
              Nam porta vulputate vestibulum. Fusce tincidunt pellentesque
              volutpat. Integer vel turpis diam. Donec eu ultricies nibh, nec
              sollicitudin urna. Nam sed lorem pellentesque, gravida turpis
              dapibus, rhoncus elit. Sed tristique laoreet nisi sed viverra.
              Nulla finibus ex nunc, sed dictum sem finibus ac.
            </Text>
          </Flex>
          <Flex
            sx={{
              // border: '1px solid black',
              flexDirection: 'column',
              width: 300,
              alignItems: 'center',
              marginTop: 100,
            }}
          >
            <Flex
              sx={{
                border: '1px solid #BABABA',
                marginTop: [30],
                paddingTop: [15],
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: '#F8F9FA',
              }}
            >
              <Text sx={{ fontWeight: 'bold', marginBottom: [10] }}>
                Rashad Alston
              </Text>
              <Image
                src="https://avatars.githubusercontent.com/u/17253182?v=4"
                width={[200]}
                height={[200]}
              />
              <Text sx={{ fontFamily: 'Arial', fontSize: 12, marginTop: [1] }}>
                Rashad being a guy (2023).
              </Text>
              <Flex
                sx={{
                  width: [300],
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
                      Rashad Abdullah Alston <br /> 11 January 1993 <br /> (age
                      30) <br /> Nashville, North Carolina, U.S.
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
                    <Text sx={{ fontFamily: 'Arial', fontSize: 13 }}>
                      Family
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
}

export default App;
