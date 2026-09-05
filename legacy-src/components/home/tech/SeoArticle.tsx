"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SeoArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-[#EFE8E0] py-16 sm:py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/40 backdrop-blur-md border border-[#1D4224]/10 rounded-3xl p-6 sm:p-10 shadow-sm transition-all duration-500">
          
          {/* Main Title */}
          <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-[#0E2015] tracking-tight leading-tight mb-6">
            Why Digital Marketing Agency is an Effective Way to Market Your Business
          </h2>

          {/* First Paragraph (Always Visible) with inline See More button */}
          <p className="font-inter text-sm sm:text-base text-[#5C6860] leading-relaxed mb-6">
            Many people are confused about what digital marketing is. 
            In simple words we can say Digital Marketing is a way of promoting 
            your website by using digital media such as email, web banners, video, audio, text, and social media. 
            This is a fairly broad definition so lets take a moment to break it all down. 
            Digital Marketing covers different techniques and it’s not always 
            easy to pinpoint which technique fits the bill the best. Here’s a brief rundown of some of the different 
            techniques that are commonly used in digital marketing campaigns.
            {!isExpanded && (
              <button 
                onClick={() => setIsExpanded(true)}
                className="inline-flex items-center gap-1 text-[#1D4224] hover:text-[#FFAE00] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider ml-2 transition-colors duration-300 outline-none cursor-pointer"
              >
                See More <ChevronDown className="w-4 h-4" />
              </button>
            )}
          </p>

          {/* Collapsible Content Block (Revealed from Search Engine Optimization onwards) */}
          {isExpanded && (
            <div className="transition-all duration-500 ease-in-out animate-in fade-in duration-300">
              {/* Search Engine Optimization */}
              <h3 className="font-montserrat font-extrabold text-xl sm:text-2xl text-[#1D4224] tracking-tight mb-3">
                Search Engine Optimization
              </h3>
              <p className="font-inter text-sm sm:text-base text-[#5C6860] leading-relaxed mb-4">
                Search engine optimization allows website owners and bloggers to 
                optimize their websites for specific keywords or keyword phrases. Content marketing involves 
                developing quality content in key niches that readers in your target market would be interested in. 
                When done effectively, search engine optimization can help your website 
                move up in the rankings of search results. Both strategies have their own advantages and disadvantages, 
                but are they really the best alternative to one another?
              </p>

              <p className="font-inter text-sm sm:text-base text-[#5C6860] leading-relaxed mb-6">
                There is no clear cut answer here, but there are a few things you can do to make sure you are doing 
                everything you can to promote your website the best way you can...
              </p>

              {/* Website Design */}
              <h3 className="font-montserrat font-extrabold text-xl sm:text-2xl text-[#1D4224] tracking-tight mb-3">
                Website Design
              </h3>
              <p className="font-inter text-sm sm:text-base text-[#5C6860] leading-relaxed mb-6">
                Developing a website is relatively easy as compared to 
                development of digital platforms. TZAR VENTURE as 
                a website development agency offer website design services at 
                affordable prices. The most important thing you should focus on is making sure you have a good 
                conversion rate. This can be measured using various 
                methods including online and customer satisfaction surveys.
              </p>

              {/* Content Marketing */}
              <h3 className="font-montserrat font-extrabold text-xl sm:text-2xl text-[#1D4224] tracking-tight mb-3">
                Content Marketing
              </h3>
              <p className="font-inter text-sm sm:text-base text-[#5C6860] leading-relaxed mb-6">
                Content marketing is an essential part of 
                Digital Marketing strategy. Content marketing is 
                simply publishing high quality information through various social media outlets such as 
                Facebook, Twitter, LinkedIn, FourSquare, YouTube, and others. 
                In essence, this strategy targets B2B businesses and online 
                brands that want to get their products and services in front of their target audience. If done effectively, 
                a successful content marketing campaign can get your website 
                ranked well in the top results of major search engines.
              </p>

              {/* Social Media Management Agency */}
              <h3 className="font-montserrat font-extrabold text-xl sm:text-2xl text-[#1D4224] tracking-tight mb-3">
                Social Media Management Agency
              </h3>
              <p className="font-inter text-sm sm:text-base text-[#5C6860] leading-relaxed mb-6">
                When it comes to content marketing and 
                digital marketing strategy implementation, a 
                social media management agency is the best option for you. 
                A social media management agency will be able to handle the 
                entire process from start to finish. They will ensure that your website reaches your 
                target audience and social media audience in the fastest way possible. Thus, with the help of a SMM agency, 
                you can be sure that you will reach the top of the search engine results within shortest period of time.
              </p>

              <p className="font-inter text-sm sm:text-base text-[#5C6860] leading-relaxed mb-6">
                SMM agencies are also adept at creating a 
                target audience for your website. With an effective 
                social media marketing services, you can attract the 
                right people to your website. For example, if you are planning to target younger crowd, then you need to 
                create engaging content that will not only attract younger crowd but also gain their trust and make them 
                comfortable to become potential customers of your company. Thus, a SMM agency will 
                be an asset to your online business. SMM services include 
                SEO, search engine optimization, social media marketing and digital marketing strategy implementation.
              </p>

              {/* Conclusion / Hiring Block */}
              <p className="font-inter text-sm sm:text-base text-[#5C6860] leading-relaxed mb-6">
                Hiring TZAR VENTURE as your 
                Digital marketing Agency has many advantages. 
                We have good proven track record with adequate experience of creating niche brand. 
                Also you can get Digital marketing Services at affordable rates. 
                Thus, you can have TZAR VENTURE as an all rounder 
                Digital Marketing Agency to assist you in promotion of 
                your business in an effective manner that will surely bring success to you.
              </p>

              {/* Collapse Trigger */}
              <button 
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-1 text-[#1D4224] hover:text-[#FFAE00] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-300 outline-none mt-2 cursor-pointer"
              >
                See Less <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default SeoArticle;
