import { Diagram } from '@/components/content/diagram';
import { MainTopic, GlossaryTerm } from '@/types';

export const streamingServicesData: MainTopic = {
  id: 'streaming-services',
  title: 'Streaming Services',
  description:
    'Explore the technologies that power video, music, and podcast streaming platforms like Netflix, Spotify, and more.',
  subTopics: [
    {
      title: 'Video Streaming (Netflix, Disney+, etc.)',
      blocks: [
        {
          title: 'Core Concepts',
          content: (
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <b>Adaptive Bitrate Streaming (ABR):</b> Adjusts video quality
                in real-time based on network conditions.
              </li>
              <li>
                <b>Content Delivery Networks (CDNs):</b> Global server networks
                that cache content closer to users for faster delivery.
              </li>
              <li>
                <b>Video Codecs (H.264, AV1, etc.):</b> Algorithms to compress
                and decompress video files.
              </li>
              <li>
                <b>Digital Rights Management (DRM):</b> Technologies to control
                access and prevent piracy.
              </li>
            </ul>
          ),
        },
        {
          title: 'Backend Architecture',
          content: (
            <Diagram
              imageId="streaming-flow"
              title="Video Delivery Pipeline"
              description="From original file to your screen, this is how video content travels."
              caption="Simplified video streaming workflow."
            />
          ),
        },
        {
          title: 'Frontend Communication',
          content: (
            <p>
              The frontend player communicates using protocols like HLS or
              MPEG-DASH. It parses a manifest file (e.g., .m3u8) to find video
              segments of different qualities, downloads them into a buffer, and
              switches between qualities as network speed changes.
            </p>
          ),
        },
      ],
    },
    {
      title: 'Music Streaming (Spotify, Apple Music)',
      blocks: [
        {
          title: 'Core Concepts',
          content: (
            <p>
              Focuses on audio codecs (AAC, FLAC), quality levels, and efficient
              caching for offline playback. Recommendation engines and social
              features are key to user retention.
            </p>
          ),
        },
        {
          title: 'Backend Architecture',
          content: (
            <Diagram
              imageId="music-backend"
              title="Music Streaming Backend"
              description="A look at the services that power music discovery and playback."
              caption="Key components of a music streaming platform."
            />
          ),
        },
      ],
    },
    {
      title: 'On-Demand vs. Live Streaming',
      blocks: [
        {
          title: 'Key Differences',
          content: (
            <p>
              On-demand uses pre-encoded files from a CDN, offering user
              control. Live streaming encodes in real-time and uses low-latency
              protocols like WebRTC to minimize delay.
            </p>
          ),
        },
      ],
    },
  ],
};

export const onlineGamingData: MainTopic = {
  id: 'online-gaming',
  title: 'Online Gaming',
  description:
    'Understand the complex infrastructure behind multiplayer platforms, cloud gaming services, and the mobile gaming boom.',
  subTopics: [
    {
      title: 'Multiplayer Platforms (Steam, PSN)',
      blocks: [
        {
          title: 'Core Architecture',
          content: (
            <p>
              Most online games use a client-server model where the server is
              the authority on the game state. This prevents cheating and ensures
              a consistent experience. Data is primarily sent via UDP for speed,
              while more reliable actions (like purchases) use TCP.
            </p>
          ),
        },
        {
          title: 'Network Communication',
          content: (
            <Diagram
              imageId="gaming-network"
              title="Client-Server Gaming Network"
              description="How players connect and interact in a typical online game."
              caption="Simplified online gaming architecture."
            />
          ),
        },
      ],
    },
    {
      title: 'Cloud Gaming (GeForce Now, Xbox Cloud Gaming)',
      blocks: [
        {
          title: 'Core Concepts',
          content: (
            <p>
              Cloud gaming is essentially a high-performance VNC. A powerful
              server renders the game and streams it as a video to the client.
              The client sends input back to the server. The primary challenge is
              minimizing input latency (the time from button press to seeing the
              result).
            </p>
          ),
        },
        {
          title: 'Technical Challenges',
          content: (
            <Diagram
              imageId="cloud-gaming"
              title="Cloud Gaming Workflow"
              description="Input is sent to the cloud, the game is rendered, and video is streamed back."
              caption="The round-trip of a cloud gaming session."
            />
          ),
        },
      ],
    },
  ],
};

export const contentCreationData: MainTopic = {
  id: 'content-creation',
  title: 'Content Creation',
  description:
    'Learn about the technology that empowers creators on platforms like YouTube, Twitch, and TikTok.',
  subTopics: [
    {
      title: 'YouTube Channels',
      blocks: [
        {
          title: 'Platform Backend',
          content: (
            <Diagram
              imageId="content-id"
              title="Copyright Content ID System"
              description="YouTube's automated system for identifying and managing copyrighted content."
              caption="A crucial component for rights holders on the platform."
            />
          ),
        },
      ],
    },
    {
      title: 'Twitch Streaming',
      blocks: [
        {
          title: 'Core Technology',
          content: (
            <p>
              Streamers use software like OBS to send their video feed via RTMP
              protocol to a Twitch ingest server. Twitch then transcodes this
              feed into multiple quality levels for viewers.
            </p>
          ),
        },
      ],
    },
  ],
};

export const subscriptionModelsData: MainTopic = {
  id: 'subscription-models',
  title: 'Subscription Models',
  description:
    'The technology behind how we pay for content, from ad-supported models to premium subscriptions and bundles.',
  subTopics: [
    {
      title: 'Ad-Supported vs. Premium',
      blocks: [
        {
          title: 'Ad-Supported Tech',
          content: (
            <Diagram
              imageId="ad-tech"
              title="Ad Serving Technology"
              description="How targeted ads are delivered to users on streaming platforms."
              caption="A simplified view of VAST/VPAID ad protocols."
            />
          ),
        },
        {
          title: 'Premium Model Tech',
          content: (
            <p>
              Premium models rely on robust subscription billing systems and
              payment gateway integrations (like Stripe or PayPal) to manage
              recurring payments, free trials, and different subscription tiers.
            </p>
          ),
        },
      ],
    },
  ],
};

export const techRequirementsData: MainTopic = {
  id: 'technology-requirements',
  title: 'Technology Requirements',
  description:
    'A breakdown of the internet speeds, devices, and compatibility standards needed for a modern media experience.',
  subTopics: [
    {
      title: 'Internet Speeds',
      blocks: [
        {
          title: 'Bandwidth Needs',
          content: (
            <ul className="list-disc space-y-2 pl-5">
              <li><b>SD Video:</b> ~3 Mbps</li>
              <li><b>HD Video:</b> 5-8 Mbps</li>
              <li><b>4K Video:</b> 25+ Mbps</li>
              <li><b>Online Gaming:</b> 3-6 Mbps (latency is more important)</li>
              <li><b>Cloud Gaming:</b> 15-35 Mbps (low latency is critical)</li>
            </ul>
          ),
        },
      ],
    },
    {
      title: 'DRM Systems',
      blocks: [
        {
          title: 'Compatibility',
          content: (
            <p>
              Different platforms use different DRM systems to protect content.
              Google uses Widevine, Apple uses FairPlay, and Microsoft uses
              PlayReady. This is why you can't easily play iTunes movies on an
              Android device.
            </p>
          ),
        },
      ],
    },
  ],
};

export const culturalImpactData: MainTopic = {
  id: 'cultural-impact',
  title: 'Cultural Impact',
  description:
    'How technology has shaped our media consumption habits, creating phenomena like binge-watching, influencer culture, and global gaming communities.',
  subTopics: [
    {
      title: 'Binge-Watching',
      blocks: [
        {
          title: 'Platform Strategies',
          content: (
            <p>
              Platforms like Netflix encourage binge-watching by releasing full
              seasons at once and auto-playing the next episode. This design
              maximizes user engagement and time spent on the platform.
            </p>
          ),
        },
      ],
    },
    {
      title: 'Influencer Culture',
      blocks: [
        {
          title: 'Economic Impact',
          content: (
            <p>
              The "creator economy" is a multi-billion dollar industry.
              Platforms provide the discovery algorithms and monetization tools
              that enable creators to build businesses through brand partnerships,
              merchandise, and direct fan support.
            </p>
          ),
        },
      ],
    },
  ],
};

export const glossaryData: GlossaryTerm[] = [
  {
    term: 'Adaptive Bitrate Streaming (ABR)',
    definition:
      'A technique used in streaming media to detect a user\'s bandwidth and CPU capacity in real time and adjust the quality of the media stream accordingly. It requires the source media to be encoded at multiple bit rates.',
  },
  {
    term: 'Content Delivery Network (CDN)',
    definition:
      'A geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing the service spatially relative to end-users.',
  },
  {
    term: 'Codec (Coder-Decoder)',
    definition:
      'A device or computer program that encodes or decodes a digital data stream or signal. Codecs are used to reduce the size of video and audio files for faster streaming.',
  },
  {
    term: 'Digital Rights Management (DRM)',
    definition:
      'A set of access control technologies for restricting the use of proprietary hardware and copyrighted works. DRM technologies try to control what a user can do with media.',
  },
  {
    term: 'HLS (HTTP Live Streaming)',
    definition:
      'An adaptive bitrate streaming protocol developed by Apple Inc. It breaks the overall stream into a sequence of small HTTP-based file downloads, each download loading one short chunk of an overall potentially unbounded transport stream.',
  },
  {
    term: 'MPEG-DASH',
    definition:
      'Dynamic Adaptive Streaming over HTTP (DASH), is an adaptive bitrate streaming technique that enables high quality streaming of media content over the Internet delivered from conventional HTTP web servers.',
  },
  {
    term: 'Latency',
    definition:
      'The delay between a user\'s action and the resulting response from a system. In gaming and cloud gaming, low latency is critical for a good user experience.',
  },
  {
    term: 'RTMP (Real-Time Messaging Protocol)',
    definition:
      'A protocol used for streaming audio, video, and data over the Internet, between a player and a server. It is commonly used by streaming software like OBS to send content to platforms like Twitch.',
  },
  {
    term: 'WebRTC (Web Real-Time Communication)',
    definition:
      'A free and open-source project providing web browsers and mobile applications with real-time communication (RTC) via simple application programming interfaces (APIs). It allows for ultra-low-latency streaming, making it suitable for live events and cloud gaming.',
  },
];
