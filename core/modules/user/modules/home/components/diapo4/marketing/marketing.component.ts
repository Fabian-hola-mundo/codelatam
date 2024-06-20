import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-marketing',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.scss',
})
export class MarketingComponent {


  goals = [
    {
      title: 'Raising Awareness',
      bullets: [
        'Publicize the project within the local community and beyond.',
        'Inform about the center’s mission and vision and its positive impact on teenagers and the community.',
      ],
    },
    {
      title: 'Attracting Participants',
      bullets: [
        'Recruit high school graduates interested in training in technology and innovation.',
        'Motivate families to enroll their children in the program.',
      ],
    },
    {
      title: 'Building a Support Network:',
      bullets: [
        'Establish partnerships with educational institutions, tech companies, and non-profit organizations.',
        'Attract volunteers, mentors, and sponsors who wish to contribute to the project.',
      ],
    },
  ];

  strategys = [
    {
      title: 'Defining the Target Audience',
      bullets: [
        'Identify and segment the target audience: high school graduates, their families, local schools, and potential sponsors or collaborators.',
      ],
    },
    {
      title: 'Branding and Communication',
      bullets: [
        'Develop a strong and coherent brand identity that reflects the values of the project.',
        'Create a clear and emotional message that conveys the center’s mission and vision.',
      ],
    },
    {
      title: 'Social Media Campaigns',
      bullets: [
        'Use platforms like Instagram, Facebook, and TikTok to reach teenagers and their families.',
        'Create engaging content that showcases impact stories, testimonials, and the center\'s construction process.',
      ],
    },
    {
      title: 'Strategic Alliances',
      bullets: [
        'Establish partnerships with schools, universities, and local organizations to gain support and access to teenagers.',
        'Collaborate with influencers and opinion leaders in the educational and technological fields.',
      ],
    },
    {
      title: 'Events and Workshops',
      bullets: [
        'Organize informational events and free workshops at various schools and communities to present the project and attract potential candidates.',
        'Participate in educational and technological fairs to increase the center\'s visibility.',
      ],
    },
    {
      title: 'Website and Blog',
      bullets: [
        'Create an informative and easy-to-navigate website explaining the project, its objectives, and how to participate.',
        'Maintain a blog with relevant content on technology, innovation, and education.',
      ],
    },
    {
      title: 'Volunteer and Mentor Programs',
      bullets: [
        'Launch volunteer programs and seek mentors in the tech industry who can offer their time and knowledge to support teenagers.',
      ],
    },
  ];

}
