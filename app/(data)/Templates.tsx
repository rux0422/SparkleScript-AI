export default [{
    name: 'Blog Title',
    desc: 'Transform your content creation with our AI-powered blog title generator. Instantly craft engaging and SEO-friendly titles tailored to your niche, boosting the visibility and appeal of your blog.',
    category: 'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
    aiPrompt: 'Provide interesting and catchy blog topic ideas with outline on niche topics in rich editor text format',
    slug: 'generate-blog-title',
    form: [{
        label: 'Enter your blog niche/topic of interest.',
        field: 'input',
        name: 'niche',
        required: 'true'
    },
    {
        label: 'Enter blog outline',
        field: 'textarea',
        name: 'outline',

    }

]
},
{
    name: 'Blog Content',
    desc: 'Elevate your content strategy with our AI-driven platform that crafts compelling blog posts tailored to your audience. Effortlessly generate high-quality, engaging content to keep your readers hooked and your blog thriving.',
    category: 'blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
    slug: 'blog-content-generation',
    aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
    form: [
        {
            label: 'Enter your blog topic',
            field: 'input',
            name: 'topic',
            required:true
        },
        {
            label: 'Enter blog Outline here',
            field: 'textarea',
            name: 'outline'
        }
    ]
},
{
    name: 'Blog Topic Ideas',
    desc: 'Unlock endless inspiration with our AI-powered blog topic generator. Effortlessly discover fresh, relevant ideas to keep your content compelling and your audience engaged',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
    slug: 'blog-topic-idea',
    aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
    form: [
        {
            label: 'Enter your Niche',
            field: 'input',
            name: 'niche',
            required:true
        },
    ]
},
{
    name: 'Youtube SEO Title',
    desc: 'Boost your YouTube views with our AI-powered SEO title generator. Create catchy, optimized titles that drive clicks and improve your video’s search ranking.',
    category: 'Youtube Tools',
    icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
    slug: 'youtube-seo-title',
    aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
    form: [
        {
            label: 'Enter your youtube video topic keyowords',
            field: 'input',
            name: 'keywords',
            required:true
        },
        {
            label: 'Enter youtube description Outline here',
            field: 'textarea',
            name: 'outline'
        }
    ]

},
{

    name: 'Youtube Video Description',
    desc: 'Supercharge your YouTube content with our AI-driven video description generator. Create engaging, SEO-friendly descriptions that grab attention and drive more views.',
    category: 'Youtube Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
    slug: 'youtube-description',
    aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
    form: [
        {
            label: 'Enter your blog topic/title',
            field: 'input',
            name: 'topic',
            required:true
        },
        {
            label: 'Enter youtube Outline here',
            field: 'textarea',
            name: 'outline'
        }
    ]
},
{
    name: 'Youtube Video Tags',
    desc: 'Maximize your YouTube reach with our AI-powered tag generator. Effortlessly create relevant, high-impact tags to boost visibility and attract more viewers.',
    category: 'Youtube Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
    slug: 'youtube-tag',

    aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

    form: [
        {
            label: 'Enter your youtube title',
            field: 'input',
            name: 'title',
            required:true
        },
        {
            label: 'Enter youtube video Outline here (Optional)',
            field: 'textarea',
            name: 'outline'
        }
    ]
},

{
    name: 'Rewrite Article (Plagiarism Free)',
    desc: 'Revitalize your content with our AI article rewriter. Enjoy fresh, plagiarism-free versions that maintain your original message and ensure originality.',
    icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
    category: 'Rewriting Tool',
    slug: 'rewrite-article',
    aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
    form: [
        {
            label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
            field: 'textarea',
            name: 'article',
            required:true
        }
    ]
},
{
    name: 'Text Improviser',
    desc: 'Enhance your writing with our AI text improviser. Elevate your words, refine your style, and bring your content to life with effortless flair.',
    icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
    category: 'Writing Assistant',
    slug: 'text-improver',
    aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
    form: [
        {
            label: 'Enter text that you want to re-write or improve',
            field: 'textarea',
            name: 'textToImprove'
        }
    ]
},
{
    name: 'Add Emojis to Text',
    desc: 'Brighten up your text with our AI emoji tool. Quickly infuse your messages with just the right emojis to enhance expression and engagement.',
    icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
    category: 'blog',
    slug: 'add-emoji-to-text',
    aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
    form: [
        {
            label: 'Enter your text to add emojis',
            field: 'textarea',
            name: 'outline',
            required:true
        }
    ]
},
{
    name: 'Instagram Post Ideas (with detailed description)',
    desc: 'Revamp your feed with our AI-powered Instagram post ideas. Effortlessly generate fresh, engaging content concepts to captivate your audience and boost your presence.',
    icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
    category: 'blog',
   
    slug: 'instagram-post-generator',
    aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
    form: [
        {
            label: 'Enter Keywords for your post',
            field: 'input',
            name: 'keywords',
            required:true
        },
       
    ]
},
{
    name: 'Instagram Hash Tag Generator',
    desc: 'Amplify your Instagram game with our AI hashtag generator. Quickly find the perfect hashtags to boost engagement and grow your audience.',
    icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
    category: 'blog',
   
    slug: 'instagram-hash-tag-generator',
    aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
    form: [
        {
            label: 'Enter Keywords for your instagram hastag',
            field: 'input',
            name: 'keywords',
            required:true
        },
       
    ]
},
{
    name: 'Instagram Trending Post/Reel Ideas',
    desc: 'Stay ahead of the trends with our AI-powered Instagram post and reel idea generator. Effortlessly uncover trending, engaging content ideas to keep your feed and reels on point.',
    icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
    category: 'instagram',
   
    slug: 'instagram-post-idea-generator',
    aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format',
    form: [
        {
            label: 'Enter Keywords / Niche for your instagram idea',
            field: 'input',
            name: 'keywords',
            required:true
        },
       
    ]
},
{
    name: 'English Grammar Check',
    desc: 'Perfect your writing with our AI grammar corrector. Effortlessly correct mistakes and enhance clarity for polished, professional English.',
    icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
    category: 'english',
   
    slug: 'english-grammar-checker',
    aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
    form: [
        {
            label: 'Enter text to correct the grammer',
            field: 'input',
            name: 'inputText',
            required:true
        },
       
    ]
},
{
    name: 'Write Code',
    desc: 'Supercharge your development with our AI code generator. Effortlessly create precise, ready-to-use code to speed up your projects and streamline your workflow',
    icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
    category: 'Coding',
   
    slug: 'write-code',
    aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
    form: [
        {
            label: 'Enter description of code you want along with Programming Lang',
            field: 'textarea',
            name: 'codeDesscripton',
            required:true
        },
       
    ]
},
{
    name: 'Explain Code',
    desc: 'Decode your code with our AI platform. Get clear, concise explanations that make understanding and debugging your code effortless',
    icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
    category: 'Coding',
   
    slug: 'explain-code',
    aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
    form: [
        {
            label: 'Enter code which you want to understand',
            field: 'textarea',
            name: 'codeDesscripton',
            required:true
        },
       
    ]
},
{
    name: 'Debug code',
    desc: 'Troubleshoot like a pro with our AI debugging tool. Quickly pinpoint and fix code issues to streamline your development and boost efficiency',
    icon:'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
    category: 'code-bug-detector',
   
    slug: 'code-bug-detector',
    aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
    form: [
        {
            label: 'Enter code which you want to test bug',
            field: 'textarea',
            name: 'codeInput',
            required:true
        },
       
    ]
},
{
    name: 'Brand Tagline Generator',
    desc: 'Craft the perfect tagline with our AI platform. Instantly generate catchy, compelling phrases that make your brand stand out and leave a lasting impression.',
    icon:'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
    category: 'Marketting',
   
    slug: 'tagline-generator',
    aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
    form: [
        {
            label: 'Product/Brand Name',
            field: 'input',
            name: 'productName',
            required:true
        },
        {
            label: 'What you are selling / Marketting',
            field: 'textarea',
            name: 'outline',
            required:true
        },
       
    ]
},
{
    name: 'Product Description',
    desc: 'Meet your AI SEO guru: crafting irresistible, keyword-packed e-commerce product descriptions to skyrocket your online sales!',
    icon:'https://cdn-icons-png.flaticon.com/128/679/679922.png',
    category: 'Marketting',
   
    slug: 'product-description',
    aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
    form: [
        {
            label: 'Product Name',
            field: 'input',
            name: 'productName',
            required:true
        },
        {
            label: 'Product Details',
            field: 'textarea',
            name: 'outline',
            required:true
        },
       
    ]
},



]