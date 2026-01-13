export interface SchoolbusEpisode {
  number: number
  title: string
  href: string
  date: string
  isAudio?: boolean
}

export interface TribeEpisode {
  number: number
  title: string
  date: string
  duration: string
  href: string
  description: string
}

export const sovereignSchoolbus = {
  title: 'The Sovereign Schoolbus',
  description: 'A video podcast exploring sovereignty, freedom, and building alternative systems.',
  image: '/schoolbus.png',
  episodes: [
    {
      number: 7,
      title: 'Ben Lakoff, Charged Particles',
      href: 'https://www.youtube.com/watch?v=xE9b6fuBpug',
      date: '2022-03-23',
    },
    {
      number: 6,
      title: 'Amogha Natha, Dharma & Technology',
      href: 'https://www.youtube.com/watch?v=pB6y8pe5Pto',
      date: '2022-03-08',
    },
    {
      number: 5,
      title: 'JackJack, MongolNFT',
      href: 'https://www.youtube.com/watch?v=wySvcN3cFI4',
      date: '2022-03-05',
    },
    {
      number: 4,
      title: 'Matt Prewitt, Radical Xchange',
      href: 'https://www.youtube.com/watch?v=oi-wHz5bpps',
      date: '2022-03-03',
    },
    {
      number: 3,
      title: 'Andrew Kline, DoinGud',
      href: 'https://www.youtube.com/watch?v=iptSOYHVUrU',
      date: '2022-03-02',
    },
    {
      number: 2,
      title: 'Auryn Macmillan, Gnosis',
      href: 'https://www.youtube.com/watch?v=C0lWonMsj8A',
      date: '2022-03-01',
    },
    {
      number: 1,
      title: 'Zhen Yong, Web3Auth',
      href: 'https://www.youtube.com/watch?v=V7EHE2xJHiQ',
      date: '2022-02-28',
    },
  ] as SchoolbusEpisode[],
}

export const tribeOfOne = {
  title: 'A Tribe of One',
  description: "A podcast exploring the tribes we belong to and our shared communities through conversations with founders, philosophers, and builders.",
  image: '/tribe_of_one.jpg',
  podbayUrl: 'https://podbay.fm/p/a-tribe-of-one',
  episodes: [
    {
      number: 12,
      title: 'Jordan Hall Wants You To Take Responsibility (Bonus)',
      date: '2021-08-01',
      duration: '1:30:00',
      href: 'https://znuzyxaud0fjvdde.public.blob.vercel-storage.com/Jordan%20Hall%20Podcast.mp3',
      description: `A bonus episode featuring Jordan Hall, philosopher and co-founder of the Civium Project. We explore deep topics around sense-making, collective intelligence, and navigating the challenges of our current moment.`,
    },
    {
      number: 11,
      title: 'Shomit Ghose Loves Competition',
      date: '2021-07-26',
      duration: '1:18:48',
      href: 'https://cdn.simplecast.com/audio/89d0c287-031c-4b44-b308-5055a7a250fb/episodes/31530fa0-5155-4d38-b0d6-2f21fef2932a/audio/f2a5e54e-2ae1-4eaa-857c-c4b3305f5a7e/default_tc.mp3',
      description: `WARNING: This episode concludes the first season of A Tribe of One, so hang in there while we take some time to get more awesome guests and do some retooling on the show.

Now, let's get to the good stuff with our excellent guest this week: Shomit Ghose has been around the block in Silicon Valley. After being admitted to UC Berkeley at the ripe old age of 15, he went on to work in leadership roles at numerous tech companies when they went public and pivoted into a successful career in venture capital and boardrooms. He is in his 20th year as a partner at ONSET Ventures and also lectures at multiple universities on entrepreneurship and business.

We had a thorough conversation on killing the ego to win and how to take ownership of ethics in technology, starting with making ethically-bound AI.

We were so grateful to have Shomit on with us on the show and you'll love it, too.

A Tribe of One will be back soon, so please subscribe and tell your friends so we can keep growing the show and bring more conversations your way.`,
    },
    {
      number: 10,
      title: 'Lynn Connolly Is a Secret Artist',
      date: '2021-07-19',
      duration: '1:11:03',
      href: 'https://cdn.simplecast.com/audio/89d0c287-031c-4b44-b308-5055a7a250fb/episodes/fd332ebc-6654-4605-afa9-226b02a7df52/audio/0945181e-65f7-491d-be6d-18e0076abbe3/default_tc.mp3',
      description: `Welcome, welcome to another episode of A Tribe of One! Half the fun of doing this podcast has been getting to know the awesome people on the Sapien team better and learning more about their lives. And in this episode, we learned so much about Lynn Connolly, our chief operating & compliance officer.

Lynn has been with Sapien for a couple years and has done a lot to keep Sapien running smoothly and in the clear, helping us operate efficiently and scale our vision.

We had a lot of fun discussing a wide range of topics with Lynn, from art and horseback riding to notions of sovereignty and the power and limits of NFTs, even how to navigate difficult conflicts and keep them from getting too nasty.

We really appreciated this conversation with Lynn and think you will, too. If you're enjoying the show, please tell a friend! We want to get more awesome guests on the show and part of getting there is growing our audience and spreading the word.`,
    },
    {
      number: 9,
      title: 'Greg Parker Wants to Change the World',
      date: '2021-07-12',
      duration: '1:16:16',
      href: 'https://cdn.simplecast.com/audio/89d0c287-031c-4b44-b308-5055a7a250fb/episodes/611f4c5f-8cdb-453d-be24-d939a2105686/audio/340a4112-1fc0-44f9-bc1d-25c157437f3c/default_tc.mp3',
      description: `Our guest this week is Greg Parker, a storied veteran of the tech industry and our very own chief technology officer at Sapien. Greg is a legend, having held leadership roles at tech enterprises and built multiple startups, all with successful exits. He even holds the patent for peer-to-peer networking in the US and Europe.

We've been so fortunate to have Greg on the team these past two years, leading our architecture and R&D, keeping Sapien on the bleeding edge of technology on all fronts. This was such a fun conversation and long overdue, so please enjoy this excellent discussion with Greg Parker.`,
    },
    {
      number: 8,
      title: 'Auryn Macmillan Builds for the Future',
      date: '2021-07-05',
      duration: '1:04:56',
      href: 'https://cdn.simplecast.com/audio/89d0c287-031c-4b44-b308-5055a7a250fb/episodes/7b82bc0a-27f2-4c74-a2ac-e7ae90bfdc32/audio/e0acd265-9fdf-4814-a0af-34098fa792a9/default_tc.mp3',
      description: `Happy Monday, Sapiens! Welcome back to the show.

We chatted this week with Auryn Macmillan, a leading voice in the Web3 space, about building solid groundwork for the Ethereum ecosystem and creating new tools for communities and value exchange.

Auryn is a total powerhouse. He currently works with Gnosis, a company building Ethereum infrastructure, which is best known for its multi-signature wallet product and the GnosisDAO that's sweeping the discourse. He's also the founder of Clr.fund, a community that uses quadratic funding to support public good projects, and he advises BrightID, which is a public good organization providing an alternative to traditional identity solutions.

We go deep in the discussion, so grab a snack and enjoy our lively discussion.`,
    },
    {
      number: 7,
      title: 'Oscar Salazar Wants to Leave a Good Footprint',
      date: '2021-06-28',
      duration: '1:07:49',
      href: 'https://cdn.simplecast.com/audio/89d0c287-031c-4b44-b308-5055a7a250fb/episodes/9862b7b2-e805-4fd9-9686-affd6ed4efc0/audio/d69f1420-5b1f-4b9f-b894-66267b410bb4/default_tc.mp3',
      description: `Happy Monday and welcome back to A Tribe of One. We have another special episode with a member of the Sapien team. We sat down with our quality assurance lead Oscar Salazar to chat about family, fatherhood, gaming, and trying to leave a positive impact in the world.

This conversation was fun to have with a teammate who joined us at the very beginning of the pandemic and has helped the team ship the very best products that we can. He's always kindhearted and cheerful and has been such a huge part of Sapien's ongoing evolution. He also has a voice made for podcasting!

Please enjoy this episode and share it with your friends.`,
    },
    {
      number: 6,
      title: "Dr. Robin Hanson Thinks We're Lucky to Be Here",
      date: '2021-06-21',
      duration: '1:48:53',
      href: 'https://cdn.simplecast.com/audio/89d0c287-031c-4b44-b308-5055a7a250fb/episodes/cc5cff09-678a-4527-aad3-a4ce752776a3/audio/1718dec7-f22e-4128-b7bd-d2c9e09d5e64/default_tc.mp3',
      description: `Our guest this week was amazing. We had the good fortune to sit down with Dr. Robin Hanson, a professor of economics at George Mason University and research associate at the Future of Humanity Institute of Oxford University.

Dr. Hanson is one of the most prolific people I've ever met and recently published some really mind-expanding books: The Age of Em: Work, Love and Life When Robots Rule the Earth and The Elephant in the Brain: Hidden Motives in Everyday Life. He also authors the very popular blog, "Overcoming Bias."

We dove into several of Dr. Hanson's ideas, all of which have influenced us here at Sapien: his notion of the "Great Filter," machines that emulate humans, and market-driven governance. This was a phenomenal dive into some mind-bending topics and we really enjoyed exploring Dr. Hanson's expertise.

This was a great conversation and, if you agree, please tell a friend about the show!`,
    },
    {
      number: 5,
      title: 'Jonathan Goodwin Tells Stories',
      date: '2021-06-14',
      duration: '1:31:30',
      href: 'https://cdn.simplecast.com/audio/89d0c287-031c-4b44-b308-5055a7a250fb/episodes/3c30c189-381d-4862-a678-5398542eae2b/audio/0aee0e15-7903-48a0-b8f2-c4673a495484/default_tc.mp3',
      description: `Join another Sapien team installment with our marketing lead, Jonathan Goodwin, as we discuss a wide range of topics, from the future of journalism, the power of storytelling, the erasure of cities from history, and how to rebuild property ownership.

Fun fact: Jonathan is also the producer on this show!

This was a really fun discussion, so tune in for a broad discussion of life and what makes it valuable.

If you enjoy the discussion, please give us a review and tell a friend about A Tribe of One!`,
    },
    {
      number: 4,
      title: 'John De Goes Wants to Motivate',
      date: '2021-06-07',
      duration: '1:59:27',
      href: 'https://cdn.simplecast.com/audio/89d0c287-031c-4b44-b308-5055a7a250fb/episodes/44d4d049-7a70-43df-a02b-667e883bfe51/audio/f2718df0-6d9e-4227-80ce-36f99c5747af/default_tc.mp3',
      description: `This week was a fun one for Rob and myself. We interviewed our teammate John de Goes, the senior product manager at Sapien. He has been such an incredible member of our company and was an awesome guest for the show!

Since joining Sapien, he helped us refine our humans first vision and has really distilled it throughout the team. We dive into that thinking in the episode, as well as our shared love for video games and metal concerts, the crypto-powered future for those facets of life, his experiences as a Venezuelan, and his life as a digital nomad since leaving his home.

What does it mean to feel stateless? What does it feel like when a simple cassette tape of Black Sabbath puts all the puzzle pieces together? What role do communities play in helping us accept our mistakes? How does a grown man beat 8-year-olds at Call of Duty?

This was such a fun conversation to have and I'm sure you'll agree.`,
    },
    {
      number: 3,
      title: 'Dr. Po Chi Wu Is a Man With No Tribe',
      date: '2021-05-31',
      duration: '1:52:22',
      href: 'https://cdn.simplecast.com/audio/89d0c287-031c-4b44-b308-5055a7a250fb/episodes/104375ec-eeab-4ea0-acd6-1f4d538b4e43/audio/40afe085-fab0-4f2d-8fef-e9d2b3335840/default_tc.mp3',
      description: `This week, we spoke with our advisor and the inspiration behind the name of the podcast, Dr. Po Chi Wu (POE CHEE WOO). This was a challenging conversation.

Dr. Po Chi pushed us to consider what it really means to belong to a Tribe, from the perspective of someone who, for a long time, never felt that sense of belonging, that sense of place one feels in the safety and comfort of peers. We also dove deep into the lonely, Tribe-less experience of being a founder, how companies need to create a sense of Tribe for their employees to thrive, and the role truth plays in Tribe formation.

Dr. Po Chi is an Advisor at SkyDeck, the incubator/accelerator program at UC Berkeley and advises several startups around the world.

He has several decades of experience as a venture capitalist and entrepreneur in Silicon Valley and in Greater China, and currently teaches entrepreneurship as an adjunct professor in Hong Kong and Berkeley. He is also a co-founder and senior partner at Futurelab Consulting, which focuses on new technologies at the intersection of blockchain, artificial intelligence, and quantum computing.`,
    },
    {
      number: 2,
      title: 'Dr. Kevin deLaplante Wants Better Conversations',
      date: '2021-05-24',
      duration: '1:47:56',
      href: 'https://cdn.simplecast.com/audio/89d0c287-031c-4b44-b308-5055a7a250fb/episodes/c6c651d8-f77d-4eda-bea3-76601aedebdd/audio/d33f35aa-e639-44bd-8cbf-8bb4018ea60e/default_tc.mp3',
      description: `Our guest on this episode is a close friend of Sapien, the inimitable Dr. Kevin deLaplante, who has had an immeasurable impact on our brand and how we think about communities and tribalism.

He's currently the Chief Knowledge Officer at LENKER Consulting, but comes from an academic philosophy background, having spent 16 years in the Department of Philosophy & Religious Studies at Iowa State University. In his spare time, he also developed the Critical Thinker Academy, a video-based critical thinking training resource, and produced the Argument Ninja Podcast.

We had a great conversation about why it's so hard to have an authentic conversation on social media, what is the scout mindset and why is it so valuable, and the struggle for objective truth. We hope you find this conversation as mind-expanding as we did.`,
    },
    {
      number: 1,
      title: 'Dr. Mihaela Ulieru Plays a Different Game',
      date: '2021-05-17',
      duration: '1:26:38',
      href: 'https://cdn.simplecast.com/audio/89d0c287-031c-4b44-b308-5055a7a250fb/episodes/4bd681bf-aa0e-4655-bf21-111c61916615/audio/ab8df146-8074-42f7-917b-56a39950be1b/default_tc.mp3',
      description: `Dr. Mihaela Ulieru is a force for changing how others think. She has been a longtime advisor to the Sapien team and has built a career as a technology alchemist and innovator at the edge of the impossible. Dr. Ulieru founded the IMPACT Institute for the Digital Economy aiming at policy reforms for the adoption of latest digital technologies in all areas of society and sectors of the economy. She's held multiple research chairs and founded 2 research labs at the head of numerous international research consortia.

During the conversation, Dr. Ulieru talked us through her struggles with balancing individualism with meeting her tribal obligations, her identity as a member of Game B, and as an advisor to the Consilience Project. It was eye-opening and pot-stirring and we hope you enjoy Dr. Ulieru's insights — we certainly did.`,
    },
    {
      number: 0,
      title: "Let's Meet Ankit & Rob",
      date: '2021-05-04',
      duration: '1:11:40',
      href: 'https://cdn.simplecast.com/audio/89d0c287-031c-4b44-b308-5055a7a250fb/episodes/ce32e162-aae7-4ffb-84a6-5e8422eccc30/audio/70be144b-9850-4899-849c-dd63cdb47092/default_tc.mp3',
      description: `Tribes are at the core of the human experience, having always existed and changing shape to match the moment. What Tribes are you a part of? When did you last join or leave a Tribe?

Hosts Ankit Bhatia and Rob Giometti dig into each other's backgrounds, dish on the state of social media, and share their thoughts on tribalism and where they see themselves in the world.`,
    },
  ] as TribeEpisode[],
}
