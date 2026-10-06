-- Additional public-content seed for Supabase static cutover.
-- Run after SUPABASE_PUBLIC_CONTENT_SCHEMA.sql and SUPABASE_PUBLIC_CONTENT_SEED.sql.
-- Uses upserts; no deletes or truncates.
begin;

-- articles: no rows

insert into public.case_studies (id, slug, title, sector, client_name, headline, summary, challenge, approach, outcome, metrics, image_url, image_alt, is_featured, is_published, published_at, "order", created_at, updated_at) values
  (1, 'demo-integrated-controls-confidence', 'Demo case study: integrated controls confidence', 'Construction & infrastructure', 'Demo employer cohort', 'How a project team used structured controls learning to improve reporting confidence.', 'A sample case study for testing the public page and dashboard workflow. You can edit or delete it from Dashboard > Case studies.', 'The team needed one shared way to connect schedule, cost, risk and progress information before management reviews.', 'The cohort used project controls learning, workplace evidence and guided reflection to build a clearer reporting rhythm.', 'Leaders received cleaner exception reports and the team had a more consistent basis for delivery conversations.', '[{"value":"1","label":"demo record"},{"value":"3","label":"controls themes tested"}]'::jsonb, '/images/employer-capability-team.webp', 'Professional team reviewing project delivery information', true, true, '2026-09-23 11:07:26.614690', 10, '2026-09-23 11:07:26.620726', '2026-09-23 11:07:26.620742')
on conflict (id) do update set slug = excluded.slug, title = excluded.title, sector = excluded.sector, client_name = excluded.client_name, headline = excluded.headline, summary = excluded.summary, challenge = excluded.challenge, approach = excluded.approach, outcome = excluded.outcome, metrics = excluded.metrics, image_url = excluded.image_url, image_alt = excluded.image_alt, is_featured = excluded.is_featured, is_published = excluded.is_published, published_at = excluded.published_at, "order" = excluded."order", created_at = excluded.created_at, updated_at = excluded.updated_at;

-- testimonials: no rows

insert into public.event_categories (id, name, slug, kind, remote_id, is_visible, "order") values
  (1, 'Masterclass', 'local-masterclass', 'local', '', true, 0),
  (2, 'Information Session', 'local-information-session', 'local', '', true, 0),
  (3, 'Webinar', 'local-webinar', 'local', '', true, 0),
  (4, 'Project Controls Professional Level 6', 'pcp-level-6', 'programme', '', true, 0),
  (5, 'Associate Project Manager Level 4', 'associate-project-manager-level-4', 'programme', '', true, 0),
  (6, 'PMO & Governance', 'pmo-level-6', 'programme', '', true, 0),
  (7, 'Business & Professional', 'eventbrite-101', 'eventbrite', '101', true, 0)
on conflict (id) do update set name = excluded.name, slug = excluded.slug, kind = excluded.kind, remote_id = excluded.remote_id, is_visible = excluded.is_visible, "order" = excluded."order";

insert into public.events (id, slug, title, category, source, source_category_id, format, cadence, summary, description, image_url, image_alt, starts_at, ends_at, timezone, location, organizer, remote_status, sales_status, price_label, is_featured, highlights_url, cta_label, cta_href, source_url, last_synced_at, source_is_public, is_active, "order", created_at, updated_at) values
  (44, 'upskilling-your-team-exploring-opportunities-for-fully-funded-project-management-training-1005047834127', 'Upskilling Your Team: Exploring Opportunities for Fully Funded Project Management Training', 'Business & Professional', 'eventbrite', 7, 'in_person', '', '', 'Join us to learn about fully funded project management training opportunities to upskill your team - don''t miss out!

Greetings!

You''re cordially invited to join us at the Maidstone Innovation Centre for an exclusive in-person event, "Enhancing Your Team''s Expertise: Fully Funded Apprenticeship in Project Management." This event is perfectly suited for employers looking to significantly enhance their team’s skills through fully funded training opportunities.

Event Highlights:

Latest Industry Trends: Discover the most current and effective project management techniques to revitalise your project delivery.

Upskilling Opportunities: Learn how you can leverage fully funded training to elevate your existing middle-level managers and seamlessly integrate new talent into your team.

Apprenticeship Recruitment: We offer comprehensive support in recruiting apprentices, free of charge, enabling you to enhance your workforce without the added expense.

Advanced Training Programmes: Our Project Control Professional Level 6 Apprenticeship covers extensive ground, including Level 7 qualifications in project management—equivalent to a master’s degree.

Certifications and Accreditations: The programme also provides funding for esteemed certifications and accreditations such as Project Management Professional (PMP), APM Professional, PMI SP (Schedule Management Certificate), Managing Successful Programmes (MSP), P3O, and other prestigious project management credentials.

Don’t miss this fantastic opportunity to upskill your team and propel your projects to new heights. Reserve your spot today and take a pivotal step towards empowering your employees with top-tier project management skills.', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F837804159%2F480816991683%2F1%2Foriginal.png?auto=format%2Ccompress&q=75&sharp=10&s=7b4671a058bc7cf093e0a1c8021c907c', '', '2024-10-04 08:00:00', '2024-10-04 11:00:00', 'Europe/London', 'Maidstone Innovation Centre, Gidds Pond Way, Weavering, ME14 5FY', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/upskilling-your-team-exploring-opportunities-for-fully-funded-project-management-training-tickets-1005047834127', 'https://www.eventbrite.co.uk/e/upskilling-your-team-exploring-opportunities-for-fully-funded-project-management-training-tickets-1005047834127', '2026-09-21 10:34:23.319738', true, true, 0, '2026-09-21 10:34:24.166905', '2026-09-21 10:34:24.166917'),
  (45, 'attention-employers-d2n2-skills-bootcamp-government-funded-programme-for-recruitment-upskilling-1036670357947', 'Attention Employers: D2N2 Skills Bootcamp -Government-Funded Programme for Recruitment & Upskilling', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Hey Employers! Join our online D2N2 Skills Bootcamp for a chance to recruit and upskill your workforce through a government-funded programme

Are you an Employer based in Derbyshire or Nottinghamshire? We have an exciting opportunity tailored just for you!

Join us for the D2N2 Skills Bootcamp, a government-funded initiative designed to support your recruitment and upskilling endeavours. This online webinar is an excellent opportunity for you to access essential training resources and funding aimed at enhancing your workforce''s capabilities.

IBIS Consultancy is delighted to have secured government funding to train and support local citizens in Derbyshire and Nottinghamshire. This funding aims to assist the unemployed in gaining employment, help the self-employed to enhance their skills, and enable employers like yourself to upskill your staff.

During this event, we will discuss how we can train citizens to qualify for roles within your organisation. We are prepared to customise our training topics to meet your specific needs and would appreciate the opportunity to facilitate job interviews for our learners in fields such as marketing, sales, digital marketing, and project management. If you are open to employing our learners, we can train them towards one of our fully funded apprenticeship degrees, supporting your organisation''s growth with government-backed opportunities. The minimum salary for these apprentices is GBP 6.50 per hour.

Our selection process for unemployed learners is meticulous, incorporating advanced personality trait tests to ensure we recruit naturally talented individuals who are well-suited for roles in marketing, sales, and project management. We train them to not only harness their inherent talents but also to develop professional skills.

The webinar will last two hours and cover:

An introduction to the government-funded programme.

A Q&A session to address any queries you may have.

An opportunity to express interest in recruiting, training for the self-employed, and upskilling current employees.

Our educational programmes are available both face-to-face and online, with in-person sessions held in Nottingham and Derby. For companies with more than five learners, we also offer on-site training.

Don''t miss out on this chance to boost your team''s skills and productivity. Register now to secure your spot at this pivotal event!', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F865234809%2F45451189701%2F1%2Foriginal.20241002-214314?auto=format%2Ccompress&q=75&sharp=10&s=771ee56fe20a66ed073d66aed7d104b6', '', '2024-10-11 09:00:00', '2024-10-11 11:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/attention-employers-d2n2-skills-bootcamp-government-funded-programme-for-recruitment-upskilling-tickets-1036670357947', 'https://www.eventbrite.co.uk/e/attention-employers-d2n2-skills-bootcamp-government-funded-programme-for-recruitment-upskilling-tickets-1036670357947', '2026-09-21 10:34:24.175289', true, true, 0, '2026-09-21 10:34:24.781133', '2026-09-21 10:34:24.781143'),
  (46, 'securing-a-funded-course-with-a-guaranteed-job-interview-in-marketing-and-project-management-1042258943557', 'Securing a Funded Course with a Guaranteed Job Interview in Marketing and Project Management', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'For Derbyshire and Nottinghamshire, secure a fully funded course in Marketing and Project Management that guarantees a job interview

Are you a resident of Nottinghamshire or Derbyshire (N2D2 - Skills Bootcamp)?

Securing a Funded Course with a Guaranteed Job Interview in Marketing and Project Management

Looking to kickstart your career in marketing or project management? Join us for an exciting online event where you can learn how to secure a funded course that includes a guaranteed job interview! Don''t miss this opportunity to take the next step towards your dream job. Register now and secure your spot!

🌟 What We Offer:  100 Hours of Comprehensive Training: Choose between two thrilling paths:

Certificate in Strategic Marketing and Sales: Dive into the world of marketing, sales, digital marketing, and ethical marketing.

Project Management Professional: Gain certifications in renowned methodologies like PRINCE2 or PMP and master a project management software tool.

📍 Locations:

Available in both Derby and Nottingham.

This is your chance to not just learn, but excel and secure a guaranteed job interview at the end of your training. Spaces are limited, so seize this opportunity to empower yourself and jumpstart your career!

Eligibility Conditions for N2D2 Skills Bootcamp Enrollment:

Residency Requirement: Open exclusively to residents of Derby, Nottingham, Derbyshire, and Nottinghamshire.

Exclusions: This program is not available to university students.

Documentation Required: Participants must have a British Passport, a Tier 2 Visa with residency in the UK for more than 3 years, or Indefinite Leave to Remain (ILR).

Employment Status: Both self-employed and unemployed residents are eligible to apply.

Ensure you meet these conditions to take advantage of this incredible opportunity to propel your career in Project Management or Marketing!', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F869842129%2F480816991683%2F1%2Foriginal.png?auto=format%2Ccompress&q=75&sharp=10&s=253348f4274d9765712918890718a654', '', '2024-10-18 09:00:00', '2024-10-18 11:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/securing-a-funded-course-with-a-guaranteed-job-interview-in-marketing-and-project-management-tickets-1042258943557', 'https://www.eventbrite.co.uk/e/securing-a-funded-course-with-a-guaranteed-job-interview-in-marketing-and-project-management-tickets-1042258943557', '2026-09-21 10:34:24.793992', true, true, 0, '2026-09-21 10:34:25.851019', '2026-09-21 10:34:25.851029'),
  (47, 'fully-funded-project-management-professional-pmp-with-exams-for-derbyshire-and-nottinghamshire-1042346114287', 'Fully Funded Project Management Professional (PMP) with Exams for Derbyshire and Nottinghamshire', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Get your PMP certification fully funded and prepare for the exams with our online event in Derbyshire and Nottinghamshire!

Fully Funded Project Management Professional (PMP) with Exams for Derbyshire and Nottinghamshire

Welcome to our online event where you can get fully funded training for your Project Management Professional (PMP) certification! If you''re in Derbyshire or Nottinghamshire, this is the perfect opportunity to boost your career. Our program includes exam preparation to help you ace the PMP exam. Don''t miss out on this chance to enhance your project management skills and advance your professional goals. Sign up now!

We''re excited to announce a new event and we''d love for you to join us! We are offering 20 fully funded spaces for our Project Management Professional (PMP) course, including the exam, certification, and all course materials.

🔗 Book your spot now at https://ibisconsultancy.com/pmp-registration/

🖥️ Or attend our upcoming webinar for more details about the program.

Spaces are limited, so register soon to secure your spot. We hope to see you there!

Eligibility Conditions for N2D2 Skills Bootcamp Enrollment:

Residency Requirement: Open exclusively to residents of Derby, Nottingham, Derbyshire, and Nottinghamshire.

Exclusions: This program is not available to university students.

Documentation Required: Participants must have a British Passport, a Tier 2 Visa with residency in the UK for more than 3 years, or Indefinite Leave to Remain (ILR).

Employment Status: Both self-employed and unemployed residents are eligible to apply.

Ensure you meet these conditions to take advantage of this incredible opportunity to propel your career in Project Management or Marketing!', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F869929369%2F480816991683%2F1%2Foriginal.png?auto=format%2Ccompress&q=75&sharp=10&s=76767e4fff068b96a5dd94de9260e9cf', '', '2024-10-25 09:00:00', '2024-10-25 11:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-management-professional-pmp-with-exams-for-derbyshire-and-nottinghamshire-tickets-1042346114287', 'https://www.eventbrite.co.uk/e/fully-funded-project-management-professional-pmp-with-exams-for-derbyshire-and-nottinghamshire-tickets-1042346114287', '2026-09-21 10:34:25.864292', true, true, 0, '2026-09-21 10:34:27.635258', '2026-09-21 10:34:27.635272'),
  (48, 'fully-funded-certificate-in-strategic-sales-digital-marketing-for-derbyshire-and-nottingham-1042608398787', 'Fully Funded Certificate in Strategic Sales & Digital Marketing for Derbyshire and Nottingham', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Get a free certificate in Strategic Sales & Digital Marketing for Derbyshire and Nottingham - all online, all fully funded!

Fully Funded Certificate in Strategic Sales & Digital Marketing for Derbyshire and Nottingham

Welcome to our online event! Are you looking to boost your skills in sales and digital marketing? This certificate program is fully funded and tailored for individuals in Derbyshire and Nottingham. Join us to learn the latest strategies and techniques to excel in the competitive world of sales and digital marketing. Don''t miss this opportunity to enhance your career prospects and stay ahead of the game. Register now!

Promote your career with our fully-funded program designed specifically for the burgeoning sectors of Derbyshire and Nottinghamshire! Dive into the Certificate in Strategic Sales and Digital Marketing, tailored to elevate professionals in aircraft, automotive, porcelain, pharmacy, fashion industries, and SMEs.

Program Name: Certificate in Strategic Sales and Digital Marketing
Program Overview: Join our 16-week intensive boot camp to master cutting-edge skills in sales, marketing, and procurement. Developed in close collaboration with local employers and industry experts, this program offers a bespoke curriculum focusing on strategic sales techniques, digital marketing innovations, and advanced procurement processes. Whether you''re aiming to boost your expertise in telesales, SEO, or negotiation, this program is crafted to meet the distinct needs and objectives of both learners and industries in the Derby and Nottingham areas.

Length and GLH: 100 guided learning hours over 16 weeks
Program Level: Level 4 - Intermediate
Mode of Delivery: Blended learning with a mix of live and virtual classrooms, enriched with interactive online content and practical case studies.
Method of Assessment: Engage in continuous assessment through assignments, project work, and a culminating capstone project presented to industry specialists.

Module Details:

Sales Strategies (30 GLH): Master consultative selling, CRM strategies, telesales, and personal selling.

Digital Marketing (30 GLH): Gain expertise in SEO, content marketing, social media strategies, and email marketing.

Corporate Social Responsibility (20 GLH): Explore Green Marketing and ethical sales management.

Negotiation Skills (10 GLH): Develop advanced persuasion techniques and deal-making strategies.

Market Analysis and Research (10 GLH): Analyze market trends and consumer behavior to stay ahead in your field.

Certification: Earn CPD certificates upon successful completion.
Employability Skills: Strengthen core skills in communication, teamwork, problem-solving, and leadership to enhance your career prospects.

Enroll now and propel your professional journey in strategic sales and digital marketing with a focus on key local industries!

Secure Your Spot Now! https://ibisconsultancy.com/sales-digital-marketing-registration/

Eligibility Conditions for N2D2 Skills Bootcamp Enrollment:

Residency Requirement: Open exclusively to residents of Derby, Nottingham, Derbyshire, and Nottinghamshire.

Exclusions: This program is not available to university students.

Documentation Required: Participants must have a British Passport, a Tier 2 Visa with residency in the UK for more than 3 years, or Indefinite Leave to Remain (ILR).

Employment Status: Both self-employed and unemployed residents are eligible to apply.

Ensure you meet these conditions to take advantage of this incredible opportunity to propel your career in Project Management or Marketing!', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F870302349%2F480816991683%2F1%2Foriginal.png?auto=format%2Ccompress&q=75&sharp=10&s=2f78eae215c662da30c10b63a92d0307', '', '2024-10-25 13:30:00', '2024-10-25 15:30:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-certificate-in-strategic-sales-digital-marketing-for-derbyshire-and-nottingham-tickets-1042608398787', 'https://www.eventbrite.co.uk/e/fully-funded-certificate-in-strategic-sales-digital-marketing-for-derbyshire-and-nottingham-tickets-1042608398787', '2026-09-21 10:34:27.646077', true, true, 0, '2026-09-21 10:34:28.148542', '2026-09-21 10:34:28.148554'),
  (49, 'upskill-your-staff-on-project-management-95-to-100-funded-by-the-government-1044987183797', 'Upskill Your Staff on Project Management: 95% to 100% Funded by the Government', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Get your team trained in project management for free - thanks to government funding covering 95% to 100% of the costs!

This is a fantastic opportunity for your team to enhance their project management skills significantly. The best part? The training is 95% to 100% funded by the Government!

Don''t miss out on this chance to boost your team''s capabilities and take your projects to the next level. Sign up now and propel your team to excel in project management!

What We Offer:

Project Management Professional (PMP)

Diploma Level 7 in Project Management

Diploma Level 7 in Strategy and Leadership

Extended Diploma Level 5 in Project Management

All our certifications are eligible for 95% to 100% funding from the Levy Fund, aimed at helping your business grow.

Booking and Funding Details:

Individual Registrations: You can book your place directly as an employee. However, please note that we will need to contact your manager to support your application, as the funding is intended for organisations, not individuals.

https://ibisconsultancy.com/pmp-registration/ 

Great Opportunity for Employers: This training is a superb opportunity for employers looking to enroll their teams in an apprenticeship program to upskill them. Ensure your employees'' managers are on board to take full advantage of the government-funded training.Register for a One-on-One

Eligibility Criteria:

This program is exclusively available to:

UK Residents: Must have been living in the UK for three years or more.

UK Citizens: Participants must be working in the UK.

Not Eligible: International students and individuals on a tourism visa are not eligible for this program.

We look forward to seeing you on the event day!', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F872424039%2F480816991683%2F1%2Foriginal.png?auto=format%2Ccompress&q=75&sharp=10&s=579602b37c2dbc9189d404363efd2fdc', '', '2024-11-01 10:00:00', '2024-11-01 12:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/upskill-your-staff-on-project-management-95-to-100-funded-by-the-government-tickets-1044987183797', 'https://www.eventbrite.co.uk/e/upskill-your-staff-on-project-management-95-to-100-funded-by-the-government-tickets-1044987183797', '2026-09-21 10:34:28.159547', true, true, 0, '2026-09-21 10:34:28.671517', '2026-09-21 10:34:28.671527'),
  (50, 'meet-stephen-jenner-author-of-managing-portfolios-reference-guide-1091257684109', 'Meet Stephen Jenner:  Author of  Managing Portfolios Reference Guide', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Join us for a virtual chat with Stephen Jenner, the mastermind behind the Managing Benefits and Managing Portfolios Reference Guides

Webinar Invitation: Optimize Your Project Portfolio with Industry Leaders!

📅 Date: 4th December
⏰ Time: 1:00 PM UK Time
🌐 Format: Online Interactive Webinar

Webinar Overview:

Dive into the world of strategic portfolio optimization in our upcoming interactive webinar featuring Amgad Badewi, Reader in Strategic Projects at the University of Kent, and Stephen Jenner, a global authority in benefits and portfolio management. Known as the ‘rottweiler of benefits management’ and author of the Managing Benefits and Managing Portfolios reference guides, Stephen will share invaluable insights on aligning project portfolios with organizational strategic goals.

🔍 Discussion Points:

Effective strategies for selecting and executing the right projects at the right time.

Tackling common challenges like resource constraints and prioritization in portfolio management.

The synergy between the Managing Benefits and Managing Portfolios standards and Transformation Management Office practices.

The concept of "strategic buckets" for prioritizing diverse projects.

🎯 Who Should Attend? Project managers, business executives, and anyone interested in enhancing their organization''s approach to portfolio management. This webinar is designed to provide actionable insights that can be applied directly to your strategic initiatives.

Interactive Features:

Live Q&A session with Amgad Badewi and Stephen Jenner.

Polls and interactive discussions to tailor the session to your needs.

Opportunity to network with other professionals in the field.

👉 Reserve your spot today and gain direct access to leading experts in portfolio management!

🏷️ #PortfolioManagement #Webinar #BenefitsManagement

Prepare to transform your approach to portfolio management—register now for a seat at this must-attend event!', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F904135563%2F45451189701%2F1%2Foriginal.20241121-202451?auto=format%2Ccompress&q=75&sharp=10&s=bdd146a6caf03383454b6b6ff5ce0907', '', '2024-12-04 13:00:00', '2024-12-04 14:30:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/meet-stephen-jenner-author-of-managing-portfolios-reference-guide-tickets-1091257684109', 'https://www.eventbrite.co.uk/e/meet-stephen-jenner-author-of-managing-portfolios-reference-guide-tickets-1091257684109', '2026-09-21 10:34:28.682776', true, true, 0, '2026-09-21 10:34:29.206702', '2026-09-21 10:34:29.206712'),
  (51, 'meet-stephen-jenner-author-of-managing-portfolios-reference-guide-1098146919999', 'Meet Stephen Jenner:  Author of  Managing Portfolios Reference Guide', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Join us for a virtual chat with Stephen Jenner, the mastermind behind the Managing Benefits and Managing Portfolios Reference Guides

Webinar Invitation: Optimize Your Project Portfolio with Industry Leaders!

📅 Date: 4th December
⏰ Time: 1:00 PM UK Time
🌐 Format: Online Interactive Webinar

Webinar Overview:

Dive into the world of strategic portfolio optimization in our upcoming interactive webinar featuring Amgad Badewi, Reader in Strategic Projects at the University of Kent, and Stephen Jenner, a global authority in benefits and portfolio management. Known as the ‘rottweiler of benefits management’ and author of the Managing Benefits and Managing Portfolios reference guides, Stephen will share invaluable insights on aligning project portfolios with organizational strategic goals.

🔍 Discussion Points:

Effective strategies for selecting and executing the right projects at the right time.

Tackling common challenges like resource constraints and prioritization in portfolio management.

The synergy between the Managing Benefits and Managing Portfolios standards and Transformation Management Office practices.

The concept of "strategic buckets" for prioritizing diverse projects.

🎯 Who Should Attend? Project managers, business executives, and anyone interested in enhancing their organization''s approach to portfolio management. This webinar is designed to provide actionable insights that can be applied directly to your strategic initiatives.

Interactive Features:

Live Q&A session with Amgad Badewi and Stephen Jenner.

Polls and interactive discussions to tailor the session to your needs.

Opportunity to network with other professionals in the field.

👉 Reserve your spot today and gain direct access to leading experts in portfolio management!

🏷️ #PortfolioManagement #Webinar #BenefitsManagement

Prepare to transform your approach to portfolio management—register now for a seat at this must-attend event!', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F908239673%2F45451189701%2F1%2Foriginal.20241121-202451?auto=format%2Ccompress&q=75&sharp=10&s=530a3831ed86694b10930178a5ecc8c6', '', '2024-12-04 13:00:00', '2025-01-04 14:30:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/meet-stephen-jenner-author-of-managing-portfolios-reference-guide-tickets-1098146919999', 'https://www.eventbrite.co.uk/e/meet-stephen-jenner-author-of-managing-portfolios-reference-guide-tickets-1098146919999', '2026-09-21 10:34:29.217934', true, true, 0, '2026-09-21 10:34:29.694408', '2026-09-21 10:34:29.694417'),
  (52, 'upskill-your-employees-in-project-management-at-no-cost-using-the-levy-fund-1091275025979', 'Upskill Your Employees in Project Management at No Cost Using the Levy Fund', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Learn how to improve your employees&#39; project management skills for free using the Levy Fund in our online event!

Upskill Your Employees in Project Management at No Cost Using the Levy Fund

Join us for an exclusive online event designed to enhance your team''s project management capabilities without incurring any expenses. Discover how to access up to £27,000 per employee through the Levy Fund to significantly enhance your staff''s skills. This is an unmissable opportunity to boost productivity and drive efficiency within your organization.

Key Topics:

Understanding the Levy Fund and its workings

Funding opportunities for MBA programmes

Diploma Level 7 in Strategy and Leadership

Diploma Level 7 in Project Management

Certifications from the Project Management Institute, including PMP, PgMP, PfMP, and PMO

Axelos Certifications: PRINCE2, MSP, MoP, MoV, and MoR

ITIL Certifications, including ITIL Master

Who Should Attend: This fund is exclusively available for employees who have been residing in the UK for three years or more. Please note, the fund does not cover international students or individuals on a tourist visa.

Don''t miss this chance to empower your workforce with top-tier project management training at no cost. Register today!', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F904019133%2F480816991683%2F1%2Foriginal.png?auto=format%2Ccompress&q=75&sharp=10&s=560b7826750d1189d8020ae70be8fc90', '', '2024-12-14 10:00:00', '2024-12-14 12:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.72 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/upskill-your-employees-in-project-management-at-no-cost-using-the-levy-fund-tickets-1091275025979', 'https://www.eventbrite.co.uk/e/upskill-your-employees-in-project-management-at-no-cost-using-the-levy-fund-tickets-1091275025979', '2026-09-21 10:34:29.702313', true, true, 0, '2026-09-21 10:34:30.340219', '2026-09-21 10:34:30.340229'),
  (53, 'fully-funded-cim-certificate-in-digital-marketing-nottingham-and-derby-1114527705369', 'Fully Funded CIM Certificate in Digital Marketing (Nottingham and Derby)', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Get ready to boost your digital marketing skills with a Fully Funded CIM Certificate in Digital Marketing, right from the comfort of your ho

Fully Funded CIM Certificate in Digital Marketing (Nottingham and Derby)

The Skills Bootcamp in Strategic Sales and Digital Marketing offers an exceptional opportunity to gain industry-recognised qualifications. This programme includes 12 full teaching days with refreshments in Nottingham, delivered in three cohorts:

Group 1: Starting 6th January and concluding 21st January 2025

Group 2: From 27th January to 12th February 2025

Programme Breakdown

Days 1–5: Award in Impact Marketing (CIM Certification, Level 4)

Days 6–9: Digital Marketing Certification (CIM Certification)

Days 10–12: Strategic Sales, Negotiation Skills, and Socially Responsible Marketing

Eligibility Criteria

To qualify for this fully funded programme, participants must:

Live in Nottinghamshire or Derbyshire

Have resided in the UK for three years or more

Be self-employed, employed, or unemployed

Funding and Accreditation

This Skills Bootcamp is proudly funded by:

D2N2 Local Enterprise Partnership

Department for Education

East Midlands County Combined Authority (EMCCA)

We, IBIS,  are listed as a recognised provider on the official council website. For more details, visit:
EMCCA Skills Bootcamp Providers - IBIS Consultancy

Limited Availability

There are only 40 fully funded spaces available on a first-come, first-served basis.

How to Book Your Place

To secure your place, please email:

office@ibisconsultancy.com

office@kentbusinesscollege.org

Act quickly to take advantage of this exceptional opportunity!', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F917440693%2F480816991683%2F1%2Foriginal.png?auto=format%2Ccompress&q=75&sharp=10&s=ef4dd1de21ba6d52c01f8dc743e93df5', '', '2024-12-30 10:00:00', '2024-12-30 12:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-cim-certificate-in-digital-marketing-nottingham-and-derby-tickets-1114527705369', 'https://www.eventbrite.co.uk/e/fully-funded-cim-certificate-in-digital-marketing-nottingham-and-derby-tickets-1114527705369', '2026-09-21 10:34:30.351531', true, true, 0, '2026-09-21 10:34:30.871060', '2026-09-21 10:34:30.871069'),
  (54, 'fully-funded-cim-pmp-certs-in-marketing-pm-crown-plaza-nottingham-1123567112479', 'Fully Funded CIM & PMP Certs in Marketing & PM - Crown Plaza, Nottingham', 'Business & Professional', 'eventbrite', 7, 'in_person', '', '', 'Fully Funded CIM in  Digital Marketing and Project Management Professional (PMP) – Face-to-Face Sessions at Crown Plaza, Nottingham

Join us at the Crown Plaza Hotel for a special face-to-face event, where IBIS Consultancy will introduce its funded programmes to the citizens of Nottingham and Derby. This informative session includes an open buffet and unlimited refreshments, offering a perfect opportunity to learn how our fully funded training in marketing and project management can enhance your professional skills. Don''t miss out on this chance to advance your career with the support of IBIS Consultancy''s opportunities.

We have limited seats available for this event, so please ensure you secure your spot by obtaining confirmation over the phone before attending. This free session is an invaluable opportunity to learn more about our funded programmes, so don''t miss out!

Fully Funded CIM Certificate in Digital Marketing and Project Management (Nottingham and Derby)

Join our Skills BootCamps tailored to elevate your professional credentials. We offer two distinct programmes: one in Marketing and Digital Marketing and the other in Project Management. Each programme is an excellent opportunity to secure industry-recognized qualifications.

Location and Delivery: All sessions are hosted at the Crown Plaza Hotel, Nottingham, and are structured into four cohorts:

Group 1: 6th January - 21st January 2025

Group 2: 27th January - 12th February 2025

Group 3: Online; two days a week, 4 hours per day from 13th January to 28th March.

Group 4: Year-long, two hours a week, covering all four modules; specifically designed for full-time employees and funded by the levy (not part of the BootCamp).

Each programme includes 12 full teaching days with refreshments provided.

Programme Breakdown:

Professional and Digital Marketing:

Days 1–5: Award in Impact Marketing (CIM Certification, Level 4)

Days 6–9: Digital Marketing Certification (CIM Certification, Level 4)

Days 10–12: Strategic Sales, Negotiation Skills, and Socially Responsible Marketing

Project Management Professional:

Days 1–5: Project Management Professional

Days 6–9: Agile Project Management

Days 10–12: Project Management Software and AI in Projects

Programme Incentives:

A laptop will be awarded to the participant with the highest score in each exam, and another for the participant with the highest attendance.

 Enjoy a free open buffet and unlimited refreshments provided by Crown Plaza Hotel throughout the training days.

If you are currently unemployed, we guarantee a job interview upon completion of the programme.

 All sessions will be recorded and streamed live, ensuring you can catch up on any missed content at your convenience.

Eligibility Criteria

To qualify for this fully funded programme, participants must:

Live in Nottinghamshire or Derbyshire

Have resided in the UK for three years or more

Be self-employed, employed, or unemployed

Funding and Accreditation

This Skills Bootcamp is proudly funded by:

D2N2 Local Enterprise Partnership

Department for Education

East Midlands County Combined Authority (EMCCA)

We, IBIS, are listed as a recognised provider on the official council website. For more details, visit:
EMCCA Skills Bootcamp Providers - IBIS Consultancy

Limited Availability

There are only 40 fully funded spaces available on a first-come, first-served basis.

How to Book Your Place

To secure your place, please email:

office@ibisconsultancy.com

office@kentbusinesscollege.org

Act quickly to take advantage of this exceptional opportunity!

Venue Address:

Crown Plaza,

Wollaton St, Nottingham NG1 5RH', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F917446003%2F45451189701%2F1%2Foriginal.20241214-165841?auto=format%2Ccompress&q=75&sharp=10&s=42aaa2cb3dae7cb24394317b1d72dc01', '', '2025-01-04 09:00:00', '2025-01-04 16:00:00', 'Europe/London', 'Crowne Plaza Nottingham, an IHG Hotel, Wollaton Street, Nottingham, NG1 5RH', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-cim-pmp-certs-in-marketing-pm-crown-plaza-nottingham-tickets-1123567112479', 'https://www.eventbrite.co.uk/e/fully-funded-cim-pmp-certs-in-marketing-pm-crown-plaza-nottingham-tickets-1123567112479', '2026-09-21 10:34:30.882656', true, true, 0, '2026-09-21 10:34:31.404990', '2026-09-21 10:34:31.404999'),
  (55, 'business-professional-networking-funded-recruitment-opportunities-1129577900909', 'Business Professional Networking - Funded Recruitment Opportunities', 'Business & Professional', 'eventbrite', 7, 'in_person', '', '', 'Fully Funded Recruitment Services: Access Top Talents Backed by the East Midlands Combined Authority!

Join us at the Crowne Plaza Hotel for an exclusive face-to-face event hosted by IBIS Consultancy, designed to introduce our fully funded recruitment and training programmes to the local businesses of Nottingham and Derby. Attendees will enjoy an open buffet and unlimited refreshments, creating a relaxed atmosphere for networking and knowledge sharing.

We are currently training 40 talented learners who are set to complete their studies by March 2025, ready to bring their skills and certifications to your business, enabling them to achieve prestigious certifications such as CIM Level 4, PMP, or CAPM. Our programmes provide comprehensive support, including:

Candidate profiles with exam scores, behavioural assessments, and psychological analysis of job fitness.

Ongoing mentorship and support programmes to ensure job readiness and performance excellence.

During the event, you will have the opportunity to review our curriculum and even tailor it to align with your specific employability requirements, ensuring the talent we provide perfectly meets your business needs. We’ll showcase how these talented individuals, equipped with affordable salary expectations, can contribute to the growth and success of your business.

Don’t miss this chance to explore how IBIS Consultancy can connect you with top-tier talent and transform your organisation. We look forward to welcoming you!

Venue Address:

Crown Plaza,

Wollaton St, Nottingham NG1 5RH', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F917446003%2F45451189701%2F1%2Foriginal.20241214-165841?auto=format%2Ccompress&q=75&sharp=10&s=42aaa2cb3dae7cb24394317b1d72dc01', '', '2025-01-04 09:00:00', '2025-01-04 16:00:00', 'Europe/London', 'Crowne Plaza Nottingham, an IHG Hotel, Wollaton Street, Nottingham, NG1 5RH', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/business-professional-networking-funded-recruitment-opportunities-tickets-1129577900909', 'https://www.eventbrite.co.uk/e/business-professional-networking-funded-recruitment-opportunities-tickets-1129577900909', '2026-09-21 10:34:31.418380', true, true, 0, '2026-09-21 10:34:34.489581', '2026-09-21 10:34:34.489591'),
  (56, 'fully-funded-cim-professional-cert-in-professional-digital-marketing-1117007823469', 'Fully Funded: CIM Professional Cert. in Professional & Digital Marketing', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Get ready to level up your marketing skills with a fully funded CIM Professional Certificate in Professional & Digital Marketing - all onlin

Event Description: Levy-Funded CIM Certificate in Professional and Digital Marketing

Are you ready to boost your marketing career with a Chartered Institute of Marketing (CIM) qualification? Join our Levy-Funded CIM Certificate in Professional and Digital Marketing programme – a fully funded opportunity for employees and employers to gain vital marketing skills with all costs, including training, materials, and exam fees, covered.

Programme Overview:

This one-year programme provides flexible options to fit your schedule:

Online: 2 hours per week for a year.

Face-to-Face: Intensive delivery (40 hours per module) every three months at one of our branches:

Maidstone (Kent)

Birmingham

Nottingham

The programme covers 4 key modules essential for professional marketers:

Marketing Impact – Measuring and delivering marketing effectiveness.

Planning Integrated Campaigns – Designing, executing, and evaluating impactful campaigns.

Social Media Management – Mastering tools and strategies for social media success.

MarTech (Marketing Technology) – Harnessing the power of technology to enhance marketing.

Benefits for Employees:

Fully funded: No cost for exams, materials, or registration.

Achieve a globally recognised CIM qualification.

Flexible learning: Online or face-to-face options available.

Develop practical skills to excel in today’s competitive marketing landscape.

For more information, visit:
https://ibisconsultancy.com/product/cim-level-4-certificate-in-professional-and-digital-marketing/

Benefits for Employers:

No cost: Funded through the Apprenticeship Levy or government funding.

Enhance your team’s skills with a highly practical and industry-recognised programme.

Tailored delivery options to suit business needs.

Invest in your workforce and improve overall marketing performance.

For more details on how this benefits your organisation, visit:
https://ibisconsultancy.com/marketing-executive-apprenticeship/

Eligibility Criteria:

To qualify, employees must:

Have approval from their employer to enrol as an apprentice for one year.

Be currently working in the UK.

Have lived in the UK for three years or more.

How to Register:

We are thrilled to offer fully funded spaces for our upcoming training programme, available on a first-come, first-served basis. This opportunity is limited to 40 learners only. Secure your place today by completing the application form here:
https://ibisconsultancy.com/apprentice-application-form/

Don’t miss this opportunity to gain a professional qualification and advance your marketing skills at no cost!', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F919266793%2F45451189701%2F1%2Foriginal.20241217-222924?auto=format%2Ccompress&q=75&sharp=10&s=eb6ea02bf2f741683351844f5157d5dd', '', '2025-01-22 10:00:00', '2025-01-22 12:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-cim-professional-cert-in-professional-digital-marketing-tickets-1117007823469', 'https://www.eventbrite.co.uk/e/fully-funded-cim-professional-cert-in-professional-digital-marketing-tickets-1117007823469', '2026-09-21 10:34:34.501544', true, true, 0, '2026-09-21 10:34:35.948484', '2026-09-21 10:34:35.948494'),
  (57, 'upskill-your-staff-on-sales-marketing-project-management-fully-funded-1108198113389', 'Upskill your staff on Sales, Marketing & Project Management: Fully Funded', 'Business & Professional', 'eventbrite', 7, 'in_person', '', '', 'Get your team ready to crush it in sales, marketing, and project management with our fully funded training event!

Upskill your staff on Sales, Marketing & Project Management: Fully Funded.

Join us at the Maidstone Innovation Centre for a day of learning and development! This in-person event is your chance to enhance your team''s skills in Sales, Marketing, and Project Management. Take advantage of this opportunity to boost your staff''s knowledge and capabilities at no cost to you. Don''t miss out on this fantastic chance to invest in your team''s growth!

Project Management

Project Management Professional (PMP)

PRINCE 2

APM Foundation and Professional

Managing Successful Programmes (MSP)

Management of Portfolios (MoP)

Management of Risk (MoR)

Diploma Level 7 in Project Management

Project Control Professional Level 6

Strategy and Leadership

Diploma Level 7 in Strategy and Leadership

MBA Programme with Cardiff Metropolitan University

Marketing and Sales

Chartered Institute of Marketing (CIM) Certificate in Professional and Digital Marketing (Level 4)

Chartered Institute of Marketing (CIM) Diploma in Professional and Digital Marketing (Level 6)

Market Research and Intelligence

Market Research Executive Level 4

Sales Executive Level 4

Marketing Executive Level 4

Marketing Manager Level 6

All our certifications are eligible for 95% to 100% funding from the Levy Fund, aimed at helping your business grow.

Booking and Funding Details:

Individual Registrations: You can book your place directly as an employee. However, please note that we will need to contact your manager to support your application, as the funding is intended for organisations, not individuals.

Great Opportunity for Employers: This training is a superb opportunity for employers looking to enroll their teams in an apprenticeship program to upskill them. Ensure your employees'' managers are on board to take full advantage of the government-funded training.Register here

Eligibility Criteria:

This program is exclusively available to:

UK Residents: Must have been living in the UK for three years or more.

UK Citizens: Participants must be working in the UK.

Not Eligible: International students and individuals on a tourism visa are not eligible for this program.

We look forward to seeing you on the event day!

Simon Forzani

Head of Apprenticeships and Funded Education,

IBIS Consultancy LTD

37-39 Maidstone Innovation Centre, Gidds Pond Way, Weavering, Maidstone ME14 5FYL', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F913517293%2F480816991683%2F1%2Foriginal.png?auto=format%2Ccompress&q=75&sharp=10&s=bb00af8ad9eb0a6f83ad742aca3a30fd', '', '2025-01-24 09:00:00', '2025-01-24 13:00:00', 'Europe/London', 'Maidstone Innovation Centre, Gidds Pond Way, Weavering, ME14 5FY', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/upskill-your-staff-on-sales-marketing-project-management-fully-funded-tickets-1108198113389', 'https://www.eventbrite.co.uk/e/upskill-your-staff-on-sales-marketing-project-management-fully-funded-tickets-1108198113389', '2026-09-21 10:34:35.960557', true, true, 0, '2026-09-21 10:34:36.593061', '2026-09-21 10:34:36.593077'),
  (58, 'self-employed-fully-funded-cim-cert-in-marketing-crown-plaza-nottingham-1219513129599', 'Self Employed: Fully Funded CIM Cert. in Marketing- Crown Plaza, Nottingham', 'Business & Professional', 'eventbrite', 7, 'in_person', '', '', 'Self-Employed Fully Funded CIM in  Professional and Digital Marketing – Face-to-Face at Crown Plaza, Nottingham

 Elevate your skills, expand your network, and gain a competitive edge by joining our Self-Employed Fully Funded CIM in Professional and Digital Marketing program. This five-day, face-to-face experience at the Crowne Plaza, Nottingham offers you the perfect combination of immersive learning, real-time collaboration, and the opportunity to earn a certificate in Strategic Sales and Digital Marketing.

Why Attend Face-to-Face?

Real-Time Interaction
Engage directly with expert trainers and industry peers, ask questions on the spot, and receive immediate, personalized feedback. The dynamic energy of in-person sessions helps you grasp new concepts more effectively and apply them faster.

Networking Opportunities
Take advantage of face-to-face connections that spark lasting professional relationships. Build a supportive community of like-minded entrepreneurs, share insights, and open doors to future collaborations.

Practical, Hands-On Workshops
Work through interactive exercises designed to simulate real-world marketing challenges. With group discussions and practical demonstrations, you’ll be able to test out marketing strategies and get constructive input from both peers and instructors.

Immersive Learning Environment
Held in the comfort and professionalism of the Crowne Plaza, you’ll stay motivated and focused—especially with breakfast, open buffets, and refreshments provided throughout the day. This fully catered setup ensures you can concentrate on mastering strategic sales and digital marketing techniques without distraction.

Fully Funded for Self-Employed Professionals
Take your business to the next level without the financial burden. This program is fully funded, making it an unbeatable investment in your professional development.

Join us for this exclusive face-to-face opportunity and walk away with cutting-edge knowledge, valuable new contacts, and a prestigious CIM-accredited certificate. Maximize your potential as a self-employed professional and turn your vision into actionable strategies that drive real results. We look forward to welcoming you to five days of growth, connection, and inspiration at the Crowne Plaza, Nottingham!

Eligibility Criteria

To qualify for this fully funded programme, participants must:

Live in Nottinghamshire or Derbyshire

Have resided in the UK for three years or more

Be self-employed

Funding and Accreditation

This Skills Bootcamp is proudly funded by:

D2N2 Local Enterprise Partnership

Department for Education

East Midlands County Combined Authority (EMCCA)

We, IBIS, are listed as a recognised provider on the official council website. For more details, visit:
EMCCA Skills Bootcamp Providers - IBIS Consultancy

Limited Availability

There are only 10 fully funded spaces available on a first-come, first-served basis.

How to Book Your Place

Registration Link

https://ibisconsultancy.com/self-employed-cim-bootcamp/ 

More Information

office@ibisconsultancy.com

office@kentbusinesscollege.org

Act quickly to take advantage of this exceptional opportunity!

Venue Address:

Crown Plaza,

Wollaton St, Nottingham NG1 5RH', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F942943723%2F45451189701%2F1%2Foriginal.20250123-153352?auto=format%2Ccompress&q=75&sharp=10&s=ea0475dd7637d65e8654557744f2b219', '', '2025-01-27 09:00:00', '2025-03-07 17:00:00', 'Europe/London', 'Crowne Plaza Nottingham, an IHG Hotel, Wollaton Street, Nottingham, NG1 5RH', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/self-employed-fully-funded-cim-cert-in-marketing-crown-plaza-nottingham-tickets-1219513129599', 'https://www.eventbrite.co.uk/e/self-employed-fully-funded-cim-cert-in-marketing-crown-plaza-nottingham-tickets-1219513129599', '2026-09-21 10:34:36.605973', true, true, 0, '2026-09-21 10:34:37.467298', '2026-09-21 10:34:37.467307'),
  (59, 'self-employed-fully-funded-cim-marketing-cert-online-workshops-1226222918759', 'Self Employed: Fully Funded CIM Marketing Cert. Online Workshops', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Self-Employed: Fully Funded CIM Certification Online Social Media, Strategic Sales, and Marketing Impacts

Elevate your skills, expand your network, and gain a competitive edge by joining our Self-Employed Fully Funded CIM in Professional and Digital Marketing program. 

Join us for this exclusive online opportunity and walk away with cutting-edge knowledge, valuable new contacts, and a prestigious CIM-accredited certificate.  

The programme 

 Marketing Impact

 Social Media Management

 Strategic Sales and CRM 

Eligibility Criteria

To qualify for this fully funded programme, participants must:

Live in Nottinghamshire or Derbyshire

Have resided in the UK for three years or more

Be self-employed

Funding and Accreditation

This Skills Bootcamp is proudly funded by:

D2N2 Local Enterprise Partnership

Department for Education

East Midlands County Combined Authority (EMCCA)

We, IBIS, are listed as a recognised provider on the official council website. For more details, visit:
EMCCA Skills Bootcamp Providers - IBIS Consultancy

Limited Availability

There are only 10 fully funded spaces available on a first-come, first-served basis.

How to Book Your Place

Registration Link

https://ibisconsultancy.com/self-employed-cim-bootcamp/

More Information

office@ibisconsultancy.com

office@kentbusinesscollege.org

Act quickly to take advantage of this exceptional opportunity!', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F942943723%2F45451189701%2F1%2Foriginal.20250123-153352?auto=format%2Ccompress&q=75&sharp=10&s=ea0475dd7637d65e8654557744f2b219', '', '2025-02-01 12:00:00', '2025-02-01 13:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/self-employed-fully-funded-cim-marketing-cert-online-workshops-tickets-1226222918759', 'https://www.eventbrite.co.uk/e/self-employed-fully-funded-cim-marketing-cert-online-workshops-tickets-1226222918759', '2026-09-21 10:34:37.475514', true, true, 0, '2026-09-21 10:34:38.632060', '2026-09-21 10:34:38.632070'),
  (60, 'self-employed-fully-funded-cim-marketing-cert-evening-online-workshops-1242390516479', 'Self Employed: Fully Funded CIM Marketing Cert. Evening Online Workshops', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Self-Employed: Fully Funded CIM Certification Online Social Media, Strategic Sales, and Marketing Impacts

Elevate your skills, expand your network, and gain a competitive edge by joining our Self-Employed Fully Funded CIM in Professional and Digital Marketing program.

Join us for this exclusive online opportunity and walk away with cutting-edge knowledge, valuable new contacts, and a prestigious CIM-accredited certificate.

The programme

Marketing Impact

Social Media Management

Strategic Sales and CRM

Eligibility Criteria

To qualify for this fully funded programme, participants must:

Live in Nottinghamshire or Derbyshire

Have resided in the UK for three years or more

Be self-employed

Funding and Accreditation

This Skills Bootcamp is proudly funded by:

D2N2 Local Enterprise Partnership

Department for Education

East Midlands County Combined Authority (EMCCA)

We, IBIS, are listed as a recognised provider on the official council website. For more details, visit:
EMCCA Skills Bootcamp Providers - IBIS Consultancy

Limited Availability

There are only 10 fully funded spaces available on a first-come, first-served basis.

How to Book Your Place

Registration Link

https://ibisconsultancy.com/self-employed-cim-bootcamp/

More Information

office@ibisconsultancy.com

office@kentbusinesscollege.org

office@kentbusinesscollege.com 

Act quickly to take advantage of this exceptional opportunity!', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F942943723%2F45451189701%2F1%2Foriginal.20250123-153352?auto=format%2Ccompress&q=75&sharp=10&s=ea0475dd7637d65e8654557744f2b219', '', '2025-02-15 17:00:00', '2025-03-31 19:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/self-employed-fully-funded-cim-marketing-cert-evening-online-workshops-tickets-1242390516479', 'https://www.eventbrite.co.uk/e/self-employed-fully-funded-cim-marketing-cert-evening-online-workshops-tickets-1242390516479', '2026-09-21 10:34:38.643991', true, true, 0, '2026-09-21 10:34:39.172699', '2026-09-21 10:34:39.172708'),
  (61, 'exclusive-employer-event-access-top-marketing-talent-free-of-charge-1232179695639', 'Exclusive Employer Event: Access Top Marketing Talent – Free of Charge!', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Get ready to connect with top marketing talent for free at our Exclusive Employer Event - don''t miss out on this opportunity!

Discover a New Approach to Recruitment

Are you looking for talented and job-ready marketing professionals to join your team? Finding the right candidates can be a challenge, but at IBIS Consultancy LTD & Kent Business College, we are dedicated to making recruitment easier, cost-free, and more effective for employers like you.

This event is designed to connect you with pre-qualified, skilled marketing professionals who are ready to contribute from day one. As an EMCCA-funded initiative, our goal is to help businesses recruit and retain top talent while also providing mentorship, professional development, and access to government-funded training opportunities.

This is a completely free service, available exclusively to businesses looking to hire and develop high-calibre marketing professionals.

Why Attend?

Meet Skilled Marketing Candidates – Gain access to professionals who have completed half of CIM Level 4 in Professional and Digital Marketing, ensuring they are equipped with up-to-date industry knowledge and practical expertise.

No Recruitment Costs – Unlike traditional hiring methods, we provide you with a pool of pre-vetted candidates at no cost, saving your business time and money.

Science & Research-Based Matching – We use a structured approach, including aptitude tests, job fitness assessments, and RAISEC profiling, to help match the right talent to the right roles.

Ongoing Support & Mentorship – We don’t just connect you with candidates; we work closely with them to ensure they integrate successfully into your organisation and perform effectively in their roles.

95% Funded Degree Apprenticeships – Once hired, your employees can be enrolled in a government-funded apprenticeship programme, allowing them to continue their education and gain a full degree while working for you.

Fill Key Roles with Confidence – Whether you are looking for an Email Marketing Manager, Social Media Specialist, Digital Marketing Executive, or Brand Strategist, we can introduce you to candidates who are motivated and ready to excel.

What to Expect at the Event?

Candidate Introductions – Review CVs, knowledge scores, aptitude test results, and job fitness assessments to identify the best potential hires for your business.

Live Q&A with Industry Experts – Understand how our science-backed recruitment process ensures the best candidate-job fit.

Insights into Apprenticeship & Training Opportunities – Discover how you can enrol new employees in 95% funded degree apprenticeships, providing them with structured career growth while adding value to your organisation.

One-to-One Support – Our team will be available to discuss your hiring needs, answer any questions, and guide you through the next steps of securing top marketing talent.

Who Should Attend?

This event is ideal for:

Business owners and employers looking to expand their marketing team.

Recruiters and HR professionals seeking a cost-effective and reliable way to hire top talent.

Marketing managers interested in upskilling their team through funded apprenticeships.

Hiring decision-makers who want to explore alternative recruitment solutions that are research-driven and 100% free of charge.

Should you have an urgent position to fill, we encourage you to reach out to us directly at either office@kentbusinesscollege.org or Office@ibisconsultancy.com for immediate assistance.', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F950748013%2F45451189701%2F1%2Foriginal.20250202-183241?auto=format%2Ccompress&q=75&sharp=10&s=1325fe432603b2cea4ce7f10c195b938', '', '2025-03-05 13:00:00', '2025-03-05 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/exclusive-employer-event-access-top-marketing-talent-free-of-charge-tickets-1232179695639', 'https://www.eventbrite.co.uk/e/exclusive-employer-event-access-top-marketing-talent-free-of-charge-tickets-1232179695639', '2026-09-21 10:34:39.185592', true, true, 0, '2026-09-21 10:34:39.861551', '2026-09-21 10:34:39.861560'),
  (62, 'fully-funded-cim-certificate-in-professional-and-digital-marketing-1246256008269', 'Fully Funded CIM Certificate in Professional and Digital Marketing*', 'Business & Professional', 'eventbrite', 7, 'online', '', '', '*Level 4 CIM in Professional and Digital Marketing – Fully Funded by the Department of Education and KBC for the First Ten Learners

Level 4 CIM in Professional and Digital Marketing – Fully Funded by the Department of Education and KBC for the First Ten Learners  – Information Session

Are you an employer looking to upskill your marketing team? Or a professional eager to gain cutting-edge marketing skills at little to no cost?

Join us for this exclusive online event to learn how you or your employees can enrol in our fully funded CIM Level 4 in Professional & Digital Marketing programme, designed for UK-based professionals.

About the Programme

This one-year, part-time course is structured to equip learners with the latest marketing strategies, ensuring they stay ahead in today’s dynamic business environment.

Programme Highlights

Flexible Learning – 2 hours per week of interactive online classes (recordings available).

Personalised Support – Free one-to-one tutoring, quizzes, homework, and real-world application exercises.

7-Day Tutor Availability – Tutors are available seven days a week until 9:00 PM.

Optional Networking Workshops – Face-to-face sessions in London, Nottingham, Birmingham, and Maidstone, with travel costs covered.

Recognition & Rewards – Graduation ceremony and a laptop prize for the top-performing learner.

Curriculum (Latest 2025 Edition)

Marketing Impact (30 hours)

Integrated Communication Channels (20 hours)

Social Media Management (20 hours)

MarTech: AI in Marketing (20 hours)

Eligibility Criteria

This programme is for employed individuals only (self-employed individuals are not eligible).

Must have lived in the UK for at least three years.

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency).

Funding Details

100% Funded – If your employer has a pay bill above £3 million or you are under 20 years old.

95% Funded – If your employer has a pay bill below £3 million, requiring only a £300 total contribution (£30 per month).

Limited Places – First Come, First Served!

Only 10 fully funded places per cohort, with the next start date on Friday, 2nd May 2025 (9:00 – 11:00 AM).

Please note that the Department for Education does not cover the cost of CIM membership, CIM exam fees, or any tutoring delivered outside of standard working hours. These elements are fully funded only for the first 10 learners, through support from Kent Business College.

Secure Your Spot Now!

If you’re ready to enrol before the event, email us at office@kentbusinesscollege.org.

Don’t miss this chance to elevate your marketing career at no cost!

Register now to secure your place!', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F967036983%2F45451189701%2F1%2Foriginal.20250222-225857?auto=format%2Ccompress&q=75&sharp=10&s=103c25672ccf28974b6682e8ed4a03aa', '', '2025-04-08 12:00:00', '2025-04-08 13:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-cim-certificate-in-professional-and-digital-marketing-tickets-1246256008269', 'https://www.eventbrite.co.uk/e/fully-funded-cim-certificate-in-professional-and-digital-marketing-tickets-1246256008269', '2026-09-21 10:34:39.873124', true, true, 0, '2026-09-21 10:34:40.623243', '2026-09-21 10:34:40.623252'),
  (63, 'fully-funded-project-control-professional-level-6-1264526846839', 'Fully Funded Project Control Professional Level 6', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Get ready to boost your career with our Fully Funded Project Control Professional Level 6 online event!

Fully Funded Project Control Professional Level 6

Hey there! Are you looking to level up your project control skills? Look no further! Join our online event where you''ll learn all about Project Control at a Professional Level 6. This is your chance to enhance your knowledge, network with industry professionals, and take your career to the next level. Don''t miss out on this amazing opportunity! Register now!', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F972282553%2F480816991683%2F1%2Foriginal.png?auto=format%2Ccompress&q=75&sharp=10&s=2bd2d2db8955e353fc47a44131c37906', '', '2025-04-15 12:00:00', '2025-04-15 13:00:00', 'Europe/London', 'Online', 'Kent Business College', 'draft', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-professional-level-6-tickets-1264526846839', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-professional-level-6-tickets-1264526846839', '2026-09-21 10:34:40.635566', false, true, 0, '2026-09-21 10:34:42.130833', '2026-09-21 10:34:42.130846'),
  (64, 'fully-funded-apm-chartered-project-manager-qualification-1270713782129', 'Fully Funded APM Chartered Project Manager Qualification', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Get your APM Chartered Project Manager Qualification fully funded in this online event - don''t miss out on this amazing opportunity!

We’re pleased to invite you to join our fully funded Project Control Professional Level 6 programme, which includes five professional certificates and the prestigious Chartered Project Professional (ChPP) designation.

"Apprenticeship does not mean being young, in a junior role, or earning a low income. In the UK, anyone working legitimately can take part in an apprenticeship. The term ''apprenticeship'' simply means learning while working — gaining practical skills and knowledge on the job, regardless of your age, background, or current job title"

We’re pleased to let you know that we’re launching a new cohort on Friday, 2nd May 2025. This two-and-a-half-year programme includes weekly sessions every Friday from 9:00 to 11:00 AM.

Programme Overview

The programme modules are

Project Management Professional (PMP) – 72 hours (36 weeks)

PMI Schedule Professional (SP) – 32 hours (16 weeks)

Earned Value Management (APMG Certificate) – 32 hours (16 weeks)

Project Planning and Control (APMG Certificate) - 40 hours (20 weeks)

Risk Management Level 1 and 2 (APM) – 32 hours (16 weeks)

The total number of weeks is 24 months with a 6 month allowance for the EPA.

After you pass your EPA, Kent Business College will prepare, submit, and cover the cost of your application to achieve

Chartered Project Professional (ChPP) (APM) - 20 hours (10 weeks)

Incorporated Cost Engineer (ICostE) or Certified Professional Cost Engineer (Based on years of experience) (ACostE / Controls & Skills Authority)

At the end of the programme, learners will achieve multiple professional designations:

Project Management Institute (PMP and SP)

APM (Risk Management Level 1 and 2)

APMG (Project Planning and Control and Earned Value Management)

Project Control Professional (Level 6) Apprenticeships (Department of Education - Institute of Apprenticeship - Equal to BSc in Project Management and Control)

Memberships (covered by Kent Business College)

ACostE / Controls & Skills Authority - Full Membership

PMI - Full Membership

APM - Full Member

These memberships give access to you to attend free events, access to unlimited materials and resources in project management and control!

Programme Highlights

Duration: 30 Months, with just 2 hours per week of online interactive learning.

Flexible Learning: Live interactive lessons with recordings available after every session.

Personalised Support:   Free one-to-one tutoring for extra help, quizzes, homework, and real-world application.  Tutors are available 7 days a week, up to 9:00 PM – even on weekends! 

Graduation Ceremony: Rochester Cathedral in Kent

Optional Networking Workshops

While the programme is primarily delivered online, we also offer optional face-to-face workshops in cities across the UK (e.g., Nottingham, London, Birmingham, and Maidstone).

Travel Covered: We take care of transportation costs for those living far from workshop centres.

Why Attend? We believe in the power of networking and the benefits of face-to-face experiences – a fantastic way for learners to connect with peers and grow professionally.

What’s Included in the Funding?

This is a truly comprehensive package:

Membership Fees, Registration, and Exam Costs (covered by Kent Business College for only 10 learners per cohort)

Tutoring Services (covered by the Department of Education)

Learning Materials (covered by the Department of Education)

Transportation Costs for Optional Workshops (covered by Kent Business College for only 10 learners per cohort)

Graduation Ceremony & Rewards: Including a laptop prize for the learner with the highest attendance and scores! (covered by Kent Business College for only 10 learners per cohort)

No hidden costs, fees, or expenses

Study Workload Per Week

Classes: 2 hours per week on Fridays. If you miss a session, tutors will catch up with you, and you can also access the recordings.

Reading & Quizzes: 2 hours per week to read the material and complete 10 multiple-choice questions (MCQs).

Reflective Reports: 2 hours per week to write a reflective report explaining how the topics covered in your class can be applied in your professional environment.

The Department for Education really values your work-life balance and learning experience. That’s why those 6 hours of study time are built into your working hours, making things much easier for you. And here’s the best part—if you’re super busy for a few weeks or even months, you can easily shift or rearrange your study time to suit your availability. It’s all about being flexible and making sure the learning works for you, not the other way around. The whole idea is to help you fit this programme into your life as smoothly as possible, without adding pressure. You’re in control of the pace!

Funding Details

Department for Education

100% Funded: Available for employers with a pay bill above £3 million or learners under 20 years old.

95% Funded: Available for employers with a pay bill (payslips) below £3 million and learners aged over 20. This requires only a 5% contribution (£1350 total or £45 per month for 30 months).

The Department of Education (DoE) fund is called the Apprenticeship Fund, and it’s not limited by age, seniority, or job title. This programme is designed for middle and senior-level management in Project Control Professional Level 6, as per the government’s official website here. It’s important to note that an Apprenticeship does not mean it’s only for younger learners or those paid the minimum wage. The key eligibility criteria are that the learner must have been a UK resident for at least 3 years and must spend 50% or more of their time working in the UK. The Department for Education funding or the Levy pot does not cover the cost of professional exams, memberships, or Chartered applications and preparation. These costs are fully covered by the Kent Business College Fund, so you won’t need to worry about any additional expenses.

Kent Business College Fund

Limited to only 10 learners per cohort. These are allocated on a first-come, first-served basis.

Covers all exam fees, Memberships, APM ChPP, and Incorporated Cost Engineer (ICostE) / Certified Professional Cost Engineer - no hidden costs

This bursary cannot be accessed without enrolling on the Department for Education programme.

Next Steps

To secure a place for your employees, follow these steps:

Sign the Attached Contract: Please review and sign the contract attached to this email. Your employer can use the word file to sign the agreement or use the online digital agreement by Sign the Agreement

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - if your employer does not have one, only Government Gateway and password is required to create an account, and add us as your provider using our UKPRN: 10093689. Watch here

Book an Enrolment Appointment (30 minutes): During this meeting, please have the following ready: Passport, GCSE certificates (if available), Other qualifications, and National Insurance Number Book an Appointment (Enrolment Meeting)

Maths and English assessment, (20 minutes): This is simply to ensure learners can read, write, and are ready to learn—there’s no pass or fail.

Training Plan Review (45 minutes): A meeting involving the line manager and employee to review and approve the training plan and finalise the remaining paperwork. Book an Appointment (Compliance Meeting)

Congratulations! Once completed, you will receive a welcome pack with some gifts, books, and other materials to help you prepare for your classes.

Feel free to reach out if you need assistance with any of the steps.

Book a meeting with me to discuss this further, please use the following link:- Book an Appointment (Information Meeting)

Please note: We have a limited number of funded apprenticeship spaces available, and they are offered strictly on a first-come, first-served basis. Due to high demand, we encourage early applications to avoid disappointment

Have a wonderful day!

Best regards,
Alice Saunders
Business Development Team

Kent Business College / IBIS Consultancy LTD', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F975975143%2F45451189701%2F1%2Foriginal.20250305-160843?auto=format%2Ccompress&q=75&sharp=10&s=89886a5f9a67b087e0b2828206eaa464', '', '2025-04-16 10:00:00', '2025-04-16 11:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-apm-chartered-project-manager-qualification-tickets-1270713782129', 'https://www.eventbrite.co.uk/e/fully-funded-apm-chartered-project-manager-qualification-tickets-1270713782129', '2026-09-21 10:34:42.141986', true, true, 0, '2026-09-21 10:34:42.677181', '2026-09-21 10:34:42.677192'),
  (65, 'fully-funded-apm-chartered-project-professional-chpp-1410142978609', 'Fully Funded APM Chartered Project Professional (ChPP)', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Get your APM Chartered Project Professional funded

We’re delighted to invite you to join our fully funded Project Control Professional Level 6 programme. This two-and-a-half-year course includes weekly sessions of just two hours and leads to five professional certificates, alongside the prestigious APM Chartered Project Professional (ChPP) and the Incorporated Cost Engineer (ICostE) or Certified Professional Cost Engineer designation from ACostE / Controls & Skills Authority.

The programme begins on Wednesday, 2nd July 2025, with regular weekly sessions scheduled every Friday from 9:00 AM to 11:00 AM.

"Apprenticeship does not mean being young, in a junior role, or earning a low income. In the UK, anyone working legitimately can take part in an apprenticeship. The term ''apprenticeship'' simply means learning while working — gaining practical skills and knowledge on the job, regardless of your age, background, or current job title"

Programme Overview

The programme modules are

PMI - Project Management Professional (PMP) – 72 hours (36 weeks)

PMI - Schedule Professional (SP) – 32 hours (16 weeks)

APMG - Earned Value Management (EVM)  – 32 hours (16 weeks)

APMG - Project Planning and Control  (PPC)- 40 hours (20 weeks)

APM -  Risk Management Level 1 and 2 – 32 hours (16 weeks)

The total number of weeks is 24 months with a 6 month allowance for the EPA.

"This is the last fully funded cohort before the new regulations take effect. Under the new regulations, starting from 1st August 2025, this programme will extend from 2 years to 4 years."

After you pass your EPA, You will get 

Chartered Project Professional (ChPP) (APM)  

Incorporated Cost Engineer (ICostE) or Certified Professional Cost Engineer (Based on years of experience) (ACostE / Controls & Skills Authority)

At the end of the programme, learners will achieve multiple professional designations:

Project Management Institute (PMP and SP)

APM (Risk Management Level 1 and 2)

APMG (Project Planning and Control and Earned Value Management)

Project Control Professional (Level 6) Apprenticeships (Department of Education - Institute of Apprenticeship - Equal to BSc in Project Management and Control)

Optional Routes (for more Strategic Positions)

Managing Successful Programmes (MSP) - Axelos Qualification (Strategic Execution Framework)

Portfolio Management (APMG)  - delivered by Stephen Jenner (The author of the Book)

PMI Project Management Office Certified Professional (PMI-PMOCP)

Memberships (covered by Kent Business College)

ACostE / Controls & Skills Authority - Full Membership

PMI - Full Membership

APM - Full Member

These memberships give access to you to attend free events, access to unlimited materials and resources in project management and control!

Programme Highlights

Duration: 30 Months, with just 2 hours per week of online interactive learning.

Flexible Learning: Live interactive lessons with recordings available after every session.

Personalised Support: Free one-to-one tutoring for extra help, quizzes, homework, and real-world application. Tutors are available 7 days a week, up to 9:00 PM – even on weekends!

Graduation Ceremony: Rochester Cathedral in Kent

Optional Networking Workshops

While the programme is primarily delivered online, we also offer optional face-to-face workshops in cities across the UK (e.g., Nottingham, London, Birmingham, and Maidstone).

Travel Covered: We take care of transportation costs for those living far from workshop centres.

Why Attend? We believe in the power of networking and the benefits of face-to-face experiences – a fantastic way for learners to connect with peers and grow professionally.

What’s Included in the Funding?

This is a truly comprehensive package:

Membership Fees, Registration, and Exam Costs (covered by Kent Business College on a discretionary basis)

Tutoring Services (covered by the Department of Education)

Learning Materials (covered by the Department of Education)

Transportation Costs for Optional Workshops (covered by Kent Business College on a discretionary basis)

Graduation Ceremony & Rewards: Including a laptop prize for the learner with the highest attendance and scores! (covered by Kent Business College on a discretionary basis)

No hidden costs, fees, or expenses

Study Workload Per Week

Classes: 2 hours per week on Wednesdays. If you miss a session, tutors will catch up with you, and you can also access the recordings.

Reading & Quizzes: 2 hours per week to read the material and complete 10 multiple-choice questions (MCQs).

Reflective Reports: 2 hours per week to write a reflective report explaining how the topics covered in your class can be applied in your professional environment.

The Department for Education really values your work-life balance and learning experience. That’s why those 6 hours of study time are built into your working hours, making things much easier for you. And here’s the best part—if you’re super busy for a few weeks or even months, you can easily shift or rearrange your study time to suit your availability. It’s all about being flexible and making sure the learning works for you, not the other way around. The whole idea is to help you fit this programme into your life as smoothly as possible, without adding pressure. You’re in control of the pace!

Funding Details

Department for Education

100% Funded: Available for employers with a pay bill above £3 million or learners under 20 years old.

95% Funded: Available for employers with a pay bill (payslips) below £3 million and learners aged over 20. This requires only a 5% contribution (£1350 total or £45 per month for 30 months).

The key eligibility criteria are that 

The learner must have been a UK resident for at least 3 years 

The learner must spend 50% or more of their time working in the UK. 

The Department for Education funding or the Levy pot does not cover the cost of professional exams, memberships, or Chartered applications and preparation. These costs are fully covered by the Kent Business College Fund, so you won’t need to worry about any additional expenses.

Kent Business College Fund

Limited to only 10 learners per cohort. These are allocated on a first-come, first-served basis.

Covers all exam fees, Memberships, APM ChPP, and Incorporated Cost Engineer (ICostE) / Certified Professional Cost Engineer - no hidden costs

This bursary cannot be accessed without enrolling on the Department for Education programme.

Next Steps

To secure a place for your employees, follow these steps:

Sign the Attached Contract: Please review and sign the contract attached to this email. Your employer can use the word file to sign the agreement or use the online digital agreement by Sign the Agreement

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - if your employer does not have one, only Government Gateway and password is required to create an account, and add us as your provider using our UKPRN: 10093689. Watch here

Book an Enrolment Appointment (30 minutes): During this meeting, please have the following ready: Passport, GCSE certificates (if available), Other qualifications, and National Insurance Number Book an Appointment (Enrolment Meeting)

Maths and English assessment, (20 minutes): This is simply to ensure learners can read, write, and are ready to learn—there’s no pass or fail.

Training Plan Review (45 minutes): A meeting involving the line manager and employee to review and approve the training plan and finalise the remaining paperwork. Book an Appointment (Compliance Meeting)

Congratulations! Once completed, you will receive a welcome pack with some gifts, books, and other materials to help you prepare for your classes.

Feel free to reach out if you need assistance with any of the steps.

Book a meeting with me to discuss this further, please use the following link:- Book an Appointment (Information Meeting)

Please note: We have a limited number of funded apprenticeship spaces available, and they are offered strictly on a first-come, first-served basis. Due to high demand, we encourage early applications to avoid disappointment

Have a wonderful day!

Best regards,

Alice Saunders

Business Development Team

Kent Business College / IBIS Consultancy LTD', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F975975143%2F45451189701%2F1%2Foriginal.20250305-160843?auto=format%2Ccompress&q=75&sharp=10&s=89886a5f9a67b087e0b2828206eaa464', '', '2025-07-02 08:00:00', '2025-07-02 10:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-apm-chartered-project-professional-chpp-tickets-1410142978609', 'https://www.eventbrite.co.uk/e/fully-funded-apm-chartered-project-professional-chpp-tickets-1410142978609', '2026-09-21 10:34:42.689090', true, true, 0, '2026-09-21 10:34:44.063431', '2026-09-21 10:34:44.063440'),
  (66, 'funded-marketing-executive-level-4-with-optional-cim-certificate-level-4-1458772922079', 'Funded Marketing Executive Level 4 with Optional CIM Certificate Level 4', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Funded Level 4 Marketing Executive Apprenticeship – with Optional CIM Level 4 Certificate Top-up

Join us for this exclusive online event to learn how you or your employees can enrol in our Funded Marketing Executive Level 4 Apprenticeship with optional top-up of CIM Certificate Level 4 in Professional and Digital Marketing, designed for UK-based professionals.

"Apprenticeship does not mean being young, in a junior role, or earning a low income. In the UK, anyone working legitimately can take part in an apprenticeship. The term ''apprenticeship'' simply means learning while working — gaining practical skills and knowledge on the job, regardless of your age, background, or current job title"

About the Programme

This one-year, part-time course is structured to equip learners with the latest marketing strategies, ensuring they stay ahead in today’s dynamic business environment.

Programme Highlights

Flexible Learning – 2 hours per week of interactive online classes (recordings available).

Personalised Support – Free one-to-one tutoring, quizzes, homework, and real-world application exercises.

7-Day Tutor Availability – Tutors are available seven days a week until 9:00 PM.

Optional Networking Workshops – Face-to-face sessions in London, Nottingham, Birmingham, and Maidstone, with travel costs covered.

Recognition & Rewards – A Graduation ceremony and a laptop prize for the top-performing learner.

Curriculum (Latest 2025 Edition)

Marketing Impact and Planning (40 hours)

Social Media Management (30 hours)

MarTech: AI in Marketing (30 hours)

Study Workload Per Week

Classes: 2 hours per week on Fridays. If you miss a session, tutors will catch up with you, and you can also access the recordings.

Reading & Quizzes: 2 hours per week to read the material and complete 10 multiple-choice questions (MCQs).

Reflective Reports: 2 hours per week to write a reflective report explaining how the topics covered in your class can be applied in your professional environment.

The Department for Education really values your work-life balance and learning experience. That’s why those 6 hours of study time are built into your working hours, making things much easier for you. And here’s the best part—if you’re super busy for a few weeks or even months, you can easily shift or rearrange your study time to suit your availability. It’s all about being flexible and making sure the learning works for you, not the other way around. The whole idea is to help you fit this programme into your life as smoothly as possible, without adding pressure. You’re in control of the pace!

Eligibility Criteria

This programme is for employed individuals only (self-employed individuals are not eligible).

Must have lived in the UK for at least three years.

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency).

Funding Details

100% Funded – If your employer has a pay bill above £3 million or you are under 20 years old.

95% Funded – If your employer has a pay bill below £3 million, requiring only a £300 total contribution (£30 per month).

Limited Places – First Come, First Served!

Only 10 fully funded places per cohort, with the next start date on Thursday, 24 July 2025 (1:00 – 3:00 PM).

Please note:The Department for Education does not cover the cost of CIM membership, CIM exam fees, or any tutoring delivered outside standard working hours. These additional costs must be funded by the employer. However, Kent Business College is currently covering these costs for the first 10 learners as part of our promotional offer for this programme. Should these costs be funded by the employer, the total amount payable will be £300 per learner.

What’s Included in the Funding?

This is a truly comprehensive package:

Marketing Executive Level 4 Certificate (Covered by Department of Education)

The opportunity to complete the CIM Level 4 in Professional and Digital Marketing (Covered by Kent Business College Fund - only for the first 10 learners)

Membership Fees, Registration, and Exam Costs (Covered by Kent Business College Fund - only for the first 10 learners)

Tutoring Services (Covered by Department of Education)

Learning Materials (Covered by Department of Education)

Transportation Costs for Optional Workshops (Covered by Kent Business College Fund - only for the first 10 learners)

Graduation Ceremony & Rewards: Including a laptop prize for the learner with the highest attendance and scores! (Covered by Kent Business College Fund - only for the first 10 learners)

Other funded Programmes

Marketing Manager Level 6 with Optional CIM Diploma Level 6 in Professional and Digital Marketing 

Market Research Executive Level 4 with Optional Marketing Research Society Certificate 

Sales Executive Level 4 

Project Control Professional Level 6 with Chartered Professional Projects (ChPP - APM)

Associate Project Manager Level 4 with Project Management Professional (PMP) 

Reach out to office@kentbusinesscollege.org 

Secure Your Spot Now!

Next Steps

To secure a place for your employees, simply follow these steps:

Sign the Attached Contract: Your employer can use a Word file to sign the agreement (Please reach out to Office@kentbusinesscollege.org) or use the online digital agreement Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - if your employer does not have one, only Government Gateway and password is required to create an account, - if your employer does not have one, only the Government Gateway and password are required to create an account, and add us as your provider using our UKPRN: 10093689.Watch here

Book an Enrolment Appointment (30 minutes): During this meeting, please have the following documents ready: your passport, GCSE certificates (if available), Other Relevant qualifications, and your National Insurance Number.

You will also take a basic Maths and English assessment, which takes approximately 30 minutes. This is simply to ensure learners can read, write, and are ready to learn—there’s no pass or fail.

Training Plan Review (45 minutes): A meeting involving the line manager and employee to review and approve the training plan and finalise the remaining paperwork.

Congratulations! Once completed, you will receive a welcome pack with some gifts, books, and other materials to help you prepare for your classes.

Please don''t hesitate to reach out if you need assistance with any of the steps.

Book a meeting with me to discuss this further, please use the following link:- Book an Appointment (Information Session)

Or email us at office@kentbusinesscollege.org.

Please note: We have a limited number of funded apprenticeship spaces available, and they are offered strictly on a first-come, first-served basis. Due to high demand, we encourage early applications to avoid disappointment

Have a wonderful day!

Best regards,

Alice Saunders

Business Development Team

Kent Business College / IBIS Consultancy LTD', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1065544323%2F45451189701%2F1%2Foriginal.20250702-215529?auto=format%2Ccompress&q=75&sharp=10&s=39b9b592d16eeba64683e8227355ff57', '', '2025-07-24 12:00:00', '2025-07-24 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/funded-marketing-executive-level-4-with-optional-cim-certificate-level-4-tickets-1458772922079', 'https://www.eventbrite.co.uk/e/funded-marketing-executive-level-4-with-optional-cim-certificate-level-4-tickets-1458772922079', '2026-09-21 10:34:44.076751', true, true, 0, '2026-09-21 10:34:44.663474', '2026-09-21 10:34:44.663499'),
  (67, 'funded-marketing-exec-with-cim-level-4-cert-in-prof-digital-marketing-1594697456019', 'Funded Marketing Exec. with CIM Level 4 Cert. in Prof & Digital Marketing', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded Level 4 Marketing Executive Apprenticeship – with CIM Level 4 Certificate in Professional and Digital Marketing

Join us for this exclusive online event to learn how you or your employees can enrol in our Funded Marketing Executive Level 4 Apprenticeship with an optional top-up of the CIM Certificate Level 4 in Professional and Digital Marketing, designed for UK-based professionals.

"Apprenticeship does not mean being young, in a junior role, or earning a low income. In the UK, anyone working legitimately can take part in an apprenticeship. The term ''apprenticeship'' simply means learning while working — gaining practical skills and knowledge on the job, regardless of your age, background, or current job title"

About the Programme

This one-year, part-time course is structured to equip learners with the latest marketing strategies, ensuring they stay ahead in today’s dynamic business environment.

Programme Highlights

Flexible Learning – 2 hours per week of interactive online classes (recordings available).

Personalised Support – Free one-to-one tutoring, quizzes, homework, and real-world application exercises.

7-Day Tutor Availability – Tutors are available seven days a week until 9:00 PM.

Optional Networking Workshops – Face-to-face sessions in London, Nottingham, Birmingham, and Maidstone, with travel costs covered.

Recognition & Rewards – A Graduation ceremony and a laptop prize for the top-performing learner.

Curriculum (Latest 2025 Edition)

Marketing Impact and Planning (48 hours)

Social Media Management (32 hours)

MarTech: AI in Marketing (32 hours)

Study Workload Per Week

Classes: 2 hours per week on Fridays. If you miss a session, tutors will catch up with you, and you can also access the recordings.

Reading & Quizzes: 2 hours per week to read the material and complete 10 multiple-choice questions (MCQs).

Reflective Reports: 2 hours per week to write a reflective report explaining how the topics covered in your class can be applied in your professional environment.

The Department for Education really values your work-life balance and learning experience. That’s why those 6 hours of study time are built into your working hours, making things much easier for you. And here’s the best part—if you’re super busy for a few weeks or even months, you can easily shift or rearrange your study time to suit your availability. It’s all about being flexible and making sure the learning works for you, not the other way around. The whole idea is to help you fit this programme into your life as smoothly as possible, without adding pressure. You’re in control of the pace!

Eligibility Criteria

This programme is for employed individuals only (self-employed individuals are not eligible).

Must have lived in the UK for at least three years.

The employer company must be based in England.

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency).

This apprenticeship cannot coincide with any other government-funded training programs. You must have completed any prior funded training before the start date of our apprenticeship cohort.

Funding Details

100% Funded – If your employer has a pay bill above £3 million or you are under 20 years old.

95% Funded – If your employer has a pay bill below £3 million, requiring only a £300 total contribution (£30 per month).

Limited Places – First Come, First Served!

Only 10 fully funded places per cohort, with the next start date on Wednesday, 1st October 2025 (1:00 – 3:00 PM).

Please note: The Department for Education does not cover the cost of CIM membership, CIM exam fees, or any tutoring delivered outside standard working hours. These additional costs must be funded by the employer. However, Kent Business College is currently covering these costs for the first 10 learners as part of our promotional offer for this programme. Should these costs be funded by the employer, the total amount payable will be £300 per learner.

What’s Included in the Funding?

This is a truly comprehensive package:

Marketing Executive Level 4 Certificate (Covered by Department of Education)

The opportunity to complete the CIM Level 4 in Professional and Digital Marketing (Covered by Kent Business College Fund - only for the first 10 learners)

Membership Fees, Registration, and Exam Costs (Covered by Kent Business College Fund - only for the first 10 learners)

Tutoring Services (Covered by Department of Education)

Learning Materials (Covered by Department of Education)

Transportation Costs for Optional Workshops (Covered by Kent Business College Fund - only for the first 10 learners)

Graduation Ceremony & Rewards: Including a laptop prize for the learner with the highest attendance and scores! (Covered by Kent Business College Fund - only for the first 10 learners)

Other funded Programmes

Marketing Manager Level 6 with Optional CIM Diploma Level 6 in Professional and Digital Marketing

Market Research Executive Level 4 with Optional Marketing Research Society Certificate

Sales Executive Level 4

Project Control Professional Level 6 with Chartered Professional Projects (ChPP - APM)

Associate Project Manager Level 4 with Project Management Professional (PMP)

Reach out to office@kentbusinesscollege.org

Secure Your Spot Now!

To secure a place for your employees, please follow the steps outlined below in order. This will ensure a smooth enrollment process and guarantee their spot in the cohort before it begins:

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Book an Enrolment Appointment (30 minutes): During this meeting, please have the following ready: Passport, GCSE certificates (if available), Other qualifications, and National Insurance Number Book an Appointment (Choose Enrolment Meeting)

Activate your APTEM account using the invitation link: Please check your inbox for the activation link to get started on APTEM (LMS platform).

Maths and English Assessment (20 minutes): This step is a government requirement to ensure that learners have the necessary literacy skills to fully engage with the program and succeed in their learning journey — there’s no pass or fail.

Training Plan Review (45 minutes):A meeting involving the line manager and employee to review and approve the training plan and finalise the remaining paperwork. Book an Appointment (Choose Compliance Meeting)

Please don''t hesitate to reach out if you need assistance with any of the steps.

Book a meeting with me to discuss this further. Please use the following link: Book an Appointment (Information Session)

Or email us at office@kentbusinesscollege.org.

Please note: We have a limited number of funded apprenticeship spaces available, and they are offered strictly on a first-come, first-served basis. Due to high demand, we encourage early applications to avoid disappointment

Best regards,

Alice Saunders

Business Development Team

Kent Business College / IBIS Consultancy LTD', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1065544323%2F45451189701%2F1%2Foriginal.20250702-215529?auto=format%2Ccompress&q=75&sharp=10&s=39b9b592d16eeba64683e8227355ff57', '', '2025-09-17 12:00:00', '2025-09-17 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/funded-marketing-exec-with-cim-level-4-cert-in-prof-digital-marketing-tickets-1594697456019', 'https://www.eventbrite.co.uk/e/funded-marketing-exec-with-cim-level-4-cert-in-prof-digital-marketing-tickets-1594697456019', '2026-09-21 10:34:44.676259', true, true, 0, '2026-09-21 10:34:45.196398', '2026-09-21 10:34:45.196410'),
  (68, 'fully-funded-project-control-with-apm-chartered-project-professionalchpp-1594770474419', 'Fully Funded Project Control with  APM Chartered Project Professional(ChPP)', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Get your APM Chartered Project Manager (ChPP - APM) fully funded in this online event - don''t miss out on this amazing opportunity!

We’re pleased to invite you to join our fully funded Project Control Professional Level 6 programme, which includes five professional certificates and the prestigious Chartered Project Professional (ChPP) designation.

"Apprenticeship does not mean being young, in a junior role, or earning a low income. In the UK, anyone working legitimately can take part in an apprenticeship. The term ''apprenticeship'' simply means learning while working — gaining practical skills and knowledge on the job, regardless of your age, background, or current job title"

We’re pleased to let you know that we’re launching a new cohort on Wednesday, 24 September 2025. This two-and-a-half-year programme includes weekly sessions every Friday or Wednesday, from 9:00 to 11:00 AM or 1:00 to 3:00 PM.

Programme Overview

The programme modules are

Project Management Professional (PMP) – 72 hours (36 weeks)

PMI Schedule Professional (SP) – 32 hours (16 weeks)

Earned Value Management (APMG Certificate) – 32 hours (16 weeks)

Project Planning and Control (APMG Certificate) - 40 hours (20 weeks)

Risk Management Level 1 and 2 (APM) – 32 hours (16 weeks)

The total number of weeks is 30 months with a 6 month allowance for the EPA.

After you pass your EPA, Kent Business College will prepare, submit, and cover the cost of your application to achieve

Chartered Project Professional (ChPP) (APM) - 20 hours (10 weeks)

Incorporated Cost Engineer (ICostE) or Certified Professional Cost Engineer (Based on years of experience) (ACostE / Controls & Skills Authority)

At the end of the programme, learners will achieve multiple professional designations:

Project Management Institute (PMP and SP)

APM (Risk Management Level 1 and 2)

APMG (Project Planning and Control and Earned Value Management)

Project Control Professional (Level 6) Apprenticeships (Department of Education - Institute of Apprenticeship - Equal to BSc in Project Management and Control)

Memberships (covered by Kent Business College)

ACostE / Controls & Skills Authority - Full Membership

PMI - Full Membership

APM - Full Member

These memberships give access to you to attend free events, access to unlimited materials and resources in project management and control!

Programme Highlights

Duration: 30 Months, with just 2 hours per week of online interactive learning.

Flexible Learning: Live interactive lessons with recordings available after every session.

Personalised Support: Free one-to-one tutoring for extra help, quizzes, homework, and real-world application. Tutors are available 7 days a week, up to 9:00 PM – even on weekends!

Graduation Ceremony: Rochester Cathedral in Kent

Optional Networking Workshops

While the programme is primarily delivered online, we also offer optional face-to-face workshops in cities across the UK (e.g., Nottingham, London, Birmingham, and Maidstone).

Travel Covered: We take care of transportation costs for those living far from workshop centres.

Why Attend? We believe in the power of networking and the benefits of face-to-face experiences – a fantastic way for learners to connect with peers and grow professionally.

What’s Included in the Funding?

This is a truly comprehensive package:

Membership Fees, Registration, and Exam Costs (covered by Kent Business College for only 10 learners per cohort)

Tutoring Services (covered by the Department of Education)

Learning Materials (covered by the Department of Education)

Transportation Costs for Optional Workshops (covered by Kent Business College for only 10 learners per cohort)

Graduation Ceremony & Rewards: Including a laptop prize for the learner with the highest attendance and scores! (covered by Kent Business College for only 10 learners per cohort)

No hidden costs, fees, or expenses

Study Workload Per Week

Classes: 2 hours per week on Fridays. If you miss a session, tutors will catch up with you, and you can also access the recordings.

Reading & Quizzes: 2 hours per week to read the material and complete 10 multiple-choice questions (MCQs).

Reflective Reports: 2 hours per week to write a reflective report explaining how the topics covered in your class can be applied in your professional environment.

The Department for Education really values your work-life balance and learning experience. That’s why those 6 hours of study time are built into your working hours, making things much easier for you. And here’s the best part—if you’re super busy for a few weeks or even months, you can easily shift or rearrange your study time to suit your availability. It’s all about being flexible and making sure the learning works for you, not the other way around. The whole idea is to help you fit this programme into your life as smoothly as possible, without adding pressure. You’re in control of the pace!

Funding Details

Department for Education

100% Funded: Available for employers with a pay bill above £3 million or learners under 20 years old.

95% Funded: Available for employers with a pay bill (payslips) below £3 million and learners aged over 20. This requires only a 5% contribution (£1350 total or £45 per month for 30 months).

The Department of Education (DoE) fund is called the Apprenticeship Fund, and it’s not limited by age, seniority, or job title. This programme is designed for middle and senior-level management in Project Control Professional Level 6, as per the government’s official website here. It’s important to note that an Apprenticeship does not mean it’s only for younger learners or those paid the minimum wage. The key eligibility criteria are that the learner must have been a UK resident for at least 3 years and must spend 50% or more of their time working in the UK. The Department for Education funding or the Levy pot does not cover the cost of professional exams, memberships, or Chartered applications and preparation. These costs are fully covered by the Kent Business College Fund, so you won’t need to worry about any additional expenses.

Kent Business College Fund

Limited to only 10 learners per cohort. These are allocated on a first-come, first-served basis.

Covers all exam fees, Memberships, APM ChPP, and Incorporated Cost Engineer (ICostE) / Certified Professional Cost Engineer - no hidden costs

This bursary cannot be accessed without enrolling on the Department for Education programme.

Next Steps

To secure a place for your employees, follow these steps:

Sign the Attached Contract: Please review and sign the contract attached to this email. Your employer can use the word file to sign the agreement or use the online digital agreement by Sign the Agreement

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - if your employer does not have one, only Government Gateway and password is required to create an account, and add us as your provider using our UKPRN: 10093689. Watch here

Book an Enrolment Appointment (30 minutes): During this meeting, please have the following ready: Passport, GCSE certificates (if available), Other qualifications, and National Insurance Number Book an Appointment (Enrolment Meeting)

Maths and English assessment (20 minutes): This is simply to ensure learners can read, write, and are ready to learn—there’s no pass or fail.

Training Plan Review (45 minutes): A meeting involving the line manager and employee to review and approve the training plan and finalise the remaining paperwork. Book an Appointment (Compliance Meeting)

Congratulations! Once completed, you will receive a welcome pack with some gifts, books, and other materials to help you prepare for your classes.

Please don''t hesitate to reach out if you need assistance with any of the steps.

Book a meeting with me to discuss this further, please use the following link:- Book an Appointment (Information Meeting)

Please note: We have a limited number of funded apprenticeship spaces available, and they are offered strictly on a first-come, first-served basis. Due to high demand, we encourage early applications to avoid disappointment

Have a wonderful day!

Best regards,

Alice SaundersBusiness Development Team

Kent Business College / IBIS Consultancy LTD', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1105591273%2F45451189701%2F1%2Foriginal.20250826-164305?auto=format%2Ccompress&q=75&sharp=10&s=91800d78877f3b7ae3808f8ce5c2ecbe', '', '2025-09-24 12:00:00', '2025-09-24 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1594770474419', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1594770474419', '2026-09-21 10:34:45.207463', true, true, 0, '2026-09-21 10:34:48.471862', '2026-09-21 10:34:48.471871'),
  (69, 'fully-funded-project-control-with-apm-chartered-project-professional-chpp-1730616784389', 'Fully Funded Project Control with APM Chartered Project Professional (ChPP)', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Secure your fully funded APM Chartered Project Manager (ChPP - APM) certification at this online event – don’t miss this opportunity!

We’re pleased to invite you to join our fully funded Project Control Professional Level 6 programme, which includes five professional certificates and the prestigious Chartered Project Professional (ChPP) designation.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Start Date: Wednesday, 15 October 2025
Schedule: Weekly on Wednesdays
Duration: 26 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Project Management Professional (PMP) – 72 hours (36 weeks)

PMI Scheduling Professional (SP) – 32 hours (16 weeks)

Cost Engineering & Earned Value Management (APMG) – 32 hours (16 weeks)

Risk Management Level 1 & 2 (APM) – 32 hours (16 weeks)

Project Planning & Control (APMG) – 40 hours (20 weeks)

ChPP Preparation (post-EPA) – 20 hours (10 weeks)

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

Study Workload

8 hrs/week (during paid working hours):

Classes: 2 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

1. Department for Education: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £1,350 total or £45/month for 30 months).
2. Kent Business College: Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways — limited to the first 10 learners per cohort.

Membership, registration & exam fees (10 learners)

Tutoring services (DfE funded)

Learning materials (DfE funded)

Workshop travel (10 learners)

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility

UK resident for the past 3 years

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information meeting. We’re here to help you every step of the way.

Best regards,
Alice Saunders
Business Development Team
Kent Business College', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1105591273%2F45451189701%2F1%2Foriginal.20250826-164305?auto=format%2Ccompress&q=75&sharp=10&s=91800d78877f3b7ae3808f8ce5c2ecbe', '', '2025-09-25 12:00:00', '2025-10-07 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'draft', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professional-chpp-tickets-1730616784389', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professional-chpp-tickets-1730616784389', '2026-09-21 10:34:48.484234', false, true, 0, '2026-09-21 10:34:49.084749', '2026-09-21 10:34:49.084770'),
  (70, 'fully-funded-project-control-with-apm-chartered-project-professionalchpp-1741059980269', 'Fully Funded Project Control with  APM Chartered Project Professional(ChPP)', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Get your APM Chartered Project Manager (ChPP - APM) fully funded in this online event - don''t miss out on this amazing opportunity!

We’re pleased to invite you to join our fully funded Project Control Professional Level 6 programme, which includes five professional certificates and the prestigious Chartered Project Professional (ChPP) designation.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Start Date: Wednesday, 15 October 2025
Schedule: Weekly on Wednesdays
Duration: 26 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Project Management Professional (PMP) – 72 hours (36 weeks)

PMI Scheduling Professional (SP) – 32 hours (16 weeks)

Cost Engineering & Earned Value Management (APMG) – 32 hours (16 weeks)

Risk Management Level 1 & 2 (APM) – 32 hours (16 weeks)

Project Planning & Control (APMG) – 40 hours (20 weeks)

ChPP Preparation (post-EPA) – 20 hours (10 weeks)

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

Study Workload

8 hrs/week (during paid working hours):

Classes: 2 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

1. Department for Education: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £1,350 total or £45/month for 30 months).
2. Kent Business College: Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways — limited to the first 10 learners per cohort.

Membership, registration & exam fees (10 learners)

Tutoring services (DfE funded)

Learning materials (DfE funded)

Workshop travel (10 learners)

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility

UK resident for the past 3 years

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information meeting. We’re here to help you every step of the way.

Best regards,
Alice Saunders
Business Development Team
Kent Business College', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1105591273%2F45451189701%2F1%2Foriginal.20250826-164305?auto=format%2Ccompress&q=75&sharp=10&s=91800d78877f3b7ae3808f8ce5c2ecbe', '', '2025-10-08 12:00:00', '2025-10-08 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1741059980269', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1741059980269', '2026-09-21 10:34:49.096185', true, true, 0, '2026-09-21 10:34:49.647480', '2026-09-21 10:34:49.647491'),
  (71, 'fully-funded-project-control-with-apm-chartered-project-professionalchpp-1937113852679', 'Fully Funded Project Control with  APM Chartered Project Professional(ChPP)', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Get your APM Chartered Project Manager (ChPP - APM) fully funded in this online event - don''t miss out on this amazing opportunity!

We’re pleased to invite you to join our fully funded Project Control Professional Level 6 programme, which includes five professional certificates and the prestigious Chartered Project Professional (ChPP) designation. More Details

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Start Date: Wednesday, 21 January 2026
Schedule: Weekly on Wednesdays
Duration: 26 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Project Management Professional (PMP)

PMI Scheduling Professional (SP)

Cost Engineering & Earned Value Management (APMG)

Risk Management Level 1 & 2 (APM)

Project Planning & Control (APMG)

ChPP Preparation (post-EPA)

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

Study Workload

8 hrs/week (during paid working hours):

Classes: 2 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

1. Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £1,350 total or £45/month for 30 months). This fund includes tutoring services, learning materials, and apprenticeship certificate.
2. Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information meeting. We’re here to help you every step of the way.', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1105591273%2F45451189701%2F1%2Foriginal.20250826-164305?auto=format%2Ccompress&q=75&sharp=10&s=91800d78877f3b7ae3808f8ce5c2ecbe', '', '2025-12-17 13:00:00', '2025-12-17 15:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1937113852679', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1937113852679', '2026-09-21 10:34:49.659313', true, true, 0, '2026-09-21 10:34:50.206260', '2026-09-21 10:34:50.206269'),
  (72, 'fully-funded-project-control-with-apm-chartered-project-professionalchpp-1976337153628', 'Fully Funded Project Control with  APM Chartered Project Professional(ChPP)', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Get your APM Chartered Project Manager (ChPP - APM) fully funded in this online event - don''t miss out on this amazing opportunity!

We’re pleased to invite you to join our fully funded Project Control Professional Level 6 programme, which includes five professional certificates and the prestigious Chartered Project Professional (ChPP) designation. More Details

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Start Date: Wednesday, 21 January 2026
Schedule: Weekly on Wednesdays
Duration: 26 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Project Management Professional (PMP)

PMI Scheduling Professional (SP)

Cost Engineering & Earned Value Management (APMG)

Risk Management Level 1 & 2 (APM)

Project Planning & Control (APMG)

ChPP Preparation (post-EPA)

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

Study Workload

8 hrs/week (during paid working hours):

Classes: 2 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

1. Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £1,350 total or £45/month for 30 months). This fund includes tutoring services, learning materials, and apprenticeship certificate.
2. Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information meeting. We’re here to help you every step of the way.', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1171960078%2F45451189701%2F1%2Foriginal.20251129-145807?auto=format%2Ccompress&q=75&sharp=10&s=4ba9d9a370708a668188f2d5423645a3', '', '2026-01-08 13:00:00', '2026-01-08 15:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1976337153628', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1976337153628', '2026-09-21 10:34:50.215084', true, true, 0, '2026-09-21 10:34:53.294597', '2026-09-21 10:34:53.294607'),
  (73, 'fully-funded-project-control-with-apm-chartered-project-professionalchpp-1982663811833', 'Fully Funded Project Control with  APM Chartered Project Professional(ChPP)', 'Business & Professional', 'eventbrite', 7, 'in_person', '', '', 'Reserve your spot for the APM Chartered Project Manager (ChPP - APM) fully funded programme in this face-to-face information event.

Kent Business College is pleased to invite you to attend our exclusive face-to-face, on-site Project Controls Professional Apprenticeship Information Event.

This session has been carefully designed for high-performing professionals, senior managers, and strategic decision-makers seeking clarity, commercial value, and a structured progression route within project controls and project management. The programme is tailored to strengthen analytical capability, governance expertise, risk management proficiency, and commercial awareness, equipping employees with the advanced competencies required to operate confidently within complex, high-value environments while delivering measurable organisational impact.

Location:
Kent Business College
37 Maidstone Innovation Centre
Gidds Pond Way, Weavering
Maidstone ME14 5FY
Vicary Seminar Room – Third Floor

Date & Time:
Thursday, 26 February 2026
2:00 PM – 4:30 PM

During this information event, you will gain:

• A comprehensive overview of the PCP apprenticeship structure
• Clear guidance on apprenticeship funding, eligibility, and employer engagement
• Insight into professional progression and industry recognition
• The opportunity to engage directly with programme specialists

Apprenticeship Programme Key Details

Intake Admission Start: May 2026
Schedule: Weekly on Wednesdays
Duration: 24 months + 6 months allowance for the EPA
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Project Management Professional (PMP)

PMI Scheduling Professional (SP)

Cost Engineering & Earned Value Management (APMG)

Risk Management Level 1 & 2 (APM)

Project Planning & Control (APMG)

ChPP Preparation (post-EPA)

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (available 7 days a week, until 9:00 PM)

Optional UK networking workshops

Graduation ceremony at Rochester Cathedral (Kent)

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

1. Department for Education Fund: Apprenticeship fund (100% for levy payers; 95% for non-levy with 5% employer contribution – £1,350 total or £45/month for 30 months). This fund includes tutoring services, learning materials, and apprenticeship certificate.
2. Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility Criteria

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information session. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F975975143%2F45451189701%2F1%2Foriginal.20250305-160843?auto=format%2Ccompress&q=75&sharp=10&s=89886a5f9a67b087e0b2828206eaa464', '', '2026-02-26 14:00:00', '2026-02-26 16:30:00', 'Europe/London', 'Maidstone Innovation Centre, Gidds Pond Way, Weavering, ME14 5FY', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1982663811833', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1982663811833', '2026-09-21 10:34:53.307867', true, true, 0, '2026-09-21 10:34:56.555411', '2026-09-21 10:34:56.555421'),
  (74, 'fully-funded-marketing-executive-level-4-with-cim-certificate-in-marketing-1981571249951', 'Fully Funded Marketing Executive Level 4 with CIM Certificate in Marketing', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Reserve your spot for the  Marketing Executive (with CIM) fully funded programme by joining this online event. Don’t miss this opportunity!

Join us for this exclusive online event to learn how you or your employees can enrol in our Funded Marketing Executive Level 4 Apprenticeship, combined with CIM Level 4 Certificate in Professional and Digital Marketing, designed for UK-based professionals. Discover More

"Just to clarify, Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: May 2026
Duration: 12 months + 3 months EPA prep
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Marketing Impact and Planning (12 weeks)

Social Media Management (12 weeks)

MarTech – AI in Marketing (12 weeks)

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 21:00)

Optional UK networking workshops; travel covered

CIM graduation ceremony in London; rewards & prizes

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Self-study: 3 hrs/week (reading + 10–20 MCQs)

Reflective report: 3 hrs/week (workplace application)

Funding & What’s Included

1. Department for Education Fund: Apprenticeship tuition (100% fund for levy payers; 95% for non-levy with 5% employer contribution – £300 total or £30/month for 10 months). This fund includes tutoring services, learning materials and marketing executive level 4 certificate.
2. Kent Business College Fund (Not Covered by DfE): Kent Business College is currently covering these costs for the first 10 learners as part of our promotional offer for this programme. This fund includes:

Optional CIM Level 4 Certificate

Membership & Exam Fees

Transportation Costs for Optional Workshops

Graduation Ceremony and Rewards

No hidden costs

Eligibility

UK resident for the past 3 years

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information meeting. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1175715183%2F45451189701%2F1%2Foriginal.20260124-134145?auto=format%2Ccompress&q=75&sharp=10&s=87a3a7e1a61b7d2922f165053d9c3394', '', '2026-04-21 12:00:00', '2026-04-21 13:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-marketing-executive-level-4-with-cim-certificate-in-marketing-tickets-1981571249951', 'https://www.eventbrite.co.uk/e/fully-funded-marketing-executive-level-4-with-cim-certificate-in-marketing-tickets-1981571249951', '2026-09-21 10:34:56.563691', true, true, 0, '2026-09-21 10:34:58.479792', '2026-09-21 10:34:58.479803'),
  (75, 'fully-funded-marketing-manager-level-6-with-cim-diploma-in-marketing-1981480911747', 'Fully Funded Marketing Manager Level 6 with CIM Diploma in Marketing', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Reserve your spot for the  Marketing Manager (with CIM) fully funded programme by joining this online event. Don’t miss this opportunity!

The programme we’re offering is the Marketing Manager Level 6 Apprenticeship, combined with an optional CIM Level 6 Diploma in Professional and Digital Marketing. It’s designed for those who hold a Level 4 or 5 qualification in Marketing or Business (with a marketing focus) and wish to enhance their strategic marketing skills.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: May 2026
Duration: 17 months + 3 months EPA prep
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Strategy & Planning – Aligning marketing strategies with business goals (16 weeks)

Commercial Intelligence – Using financial & data insights (16 weeks)

Customer Journey Optimisation (16 weeks)

AI in Marketing (16 weeks)

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 21:00)

Optional UK networking workshops; travel covered

CIM graduation ceremony in London; rewards & prizes

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £450 total or £30/month for 15 months).
Kent Business College: CIM membership, exams, workshop travel, graduation extras — only for the first 10 learners per cohort.

CIM Membership, Registration & Exam Fees (10 learners)

Tutoring services (DfE funded)

Learning materials (DfE funded)

Workshop travel (10 learners)

Graduation ceremony & rewards (10 learners, incl. laptop prize)

No hidden costs

Eligibility

UK resident for the past 3 years

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information meeting. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1175715183%2F45451189701%2F1%2Foriginal.20260124-134145?auto=format%2Ccompress&q=75&sharp=10&s=87a3a7e1a61b7d2922f165053d9c3394', '', '2026-04-23 12:00:00', '2026-04-23 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-marketing-manager-level-6-with-cim-diploma-in-marketing-tickets-1981480911747', 'https://www.eventbrite.co.uk/e/fully-funded-marketing-manager-level-6-with-cim-diploma-in-marketing-tickets-1981480911747', '2026-09-21 10:34:58.492399', true, true, 0, '2026-09-21 10:34:59.465852', '2026-09-21 10:34:59.465862'),
  (76, 'fully-funded-project-control-with-apm-chartered-project-professionalchpp-1981477880681', 'Fully Funded Project Control with  APM Chartered Project Professional(ChPP)', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Reserve your spot for the APM Chartered Project Manager (ChPP - APM) fully funded programme in this online event

We’re pleased to invite you to join our fully funded Project Control Professional Level 6 programme, which includes five professional certificates and the prestigious Chartered Project Professional (ChPP) designation. More Details

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: May 2026
Schedule: Weekly
Duration: 26 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel costs covered)

Programme Routes

Operational Route - (Modules)

Project Management Professional (PMI - PMP) or APM PMQ

PMI Scheduling Professional (PMI - SP)

Cost Engineering & Earned Value Management (APMG)

Risk Management Level 1 & 2 (APM)

Project Planning & Control (APMG)

ChPP Preparation (post-EPA)

Strategic Route - (Modules)

Project Management Professional (PMP)

Management of Portfolios (APMG)

Managing Successful Programmes (Axelos)

Risk Management Level 1 & 2 (APM)

Project Management Office (PMI)

ChPP Preparation (post-EPA)

Strategic Operational Route - (Diploma Level 7 in Project Management - No Exams - Modules)

Project Management Professional (PMP)

Planning, Controlling and Leading a Project (30 credits)

Procurement Risk and Contract Management (30 credits)

Advanced Project and Logistics Management (20 credits)

Operations and Information Management for Project Managers (20 credits)

Advanced Research Methods

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

ChPP costs are covered

All Qualifications and Exams costs are covered

Student Clubs Memberships (London, Kent, Manchester, Liverpool, and Birmingham)

Private Health Care Insurance for all learners

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £1,350 total or £50/month for 27 months). This fund includes tutoring services, learning materials, and an apprenticeship certificate.

Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility Criteria

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not in full-time education at the time of this programme

Not enrolled in other government-funded training at the time of this programme

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Join Us:::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information session. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1175712602%2F45451189701%2F1%2Foriginal.20250826-164305?auto=format%2Ccompress&q=75&sharp=10&s=102ceb280ebce22541eb5a63956074ac', '', '2026-04-30 12:00:00', '2026-04-30 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1981477880681', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1981477880681', '2026-09-21 10:34:59.478895', true, true, 0, '2026-09-21 10:35:00.073885', '2026-09-21 10:35:00.073895'),
  (77, 'fully-funded-project-control-with-apm-chartered-project-professionalchpp-1986162118362', 'Fully Funded Project Control with  APM Chartered Project Professional(ChPP)', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded APM Chartered Project Professional(ChPP), PMP , Earned Value Management (APMG)  PMI-Schedule Professional

We’re pleased to invite you to join our fully funded Project Control Professional Level 6 programme, which includes five professional certificates and the prestigious Chartered Project Professional (ChPP) designation. More Details

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: May 2026
Schedule: Weekly
Duration: 25 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel costs covered)

Operational Route - (Modules)

Project Management Professional (PMI - PMP) or APM PMQ

PMI Scheduling Professional (PMI - SP)

Cost Engineering & Earned Value Management (APMG)

Risk Management Level 1 & 2 (APM)

Project Planning & Control (APMG)

ChPP Preparation (post-EPA)

Strategic Route - (Modules)

Project Management Professional (PMP)

Management of Portfolios (APMG)

Managing Successful Programmes (Axelos)

Risk Management Level 1 & 2 (APM)

Project Management Office (PMI)

ChPP Preparation (post-EPA)

Strategic Operational Route - (Modules - Diploma Level 7 in Project Management - No Exams)

Project Management Professional (PMP)

Planning, Controlling and Leading a Project (30 credits)

Procurement Risk and Contract Management (30 credits)

Advanced Project and Logistics Management (20 credits)

Operations and Information Management for Project Managers (20 credits)

Advanced Research Methods

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

ChPP costs are covered

All Qualifications and Exams costs are covered

Student Clubs Memberships (London, Kent, Manchester, Liverpool, and Birmingham)

Private Health Care Insurance for all learners

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £1,350 total or £45/month for 30 months). This fund includes tutoring services, learning materials, and an apprenticeship certificate.

Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility Criteria

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training at the time of this programme

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Join:::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information session. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1180941885%2F45451189701%2F1%2Foriginal.20250826-164305?auto=format%2Ccompress&q=75&sharp=10&s=57d756b8f695218e3ce96ac43c92a260', '', '2026-05-13 12:00:00', '2026-05-13 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1986162118362', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1986162118362', '2026-09-21 10:35:00.086028', true, true, 0, '2026-09-21 10:35:03.147286', '2026-09-21 10:35:03.147306'),
  (78, 'fully-funded-cim-certificate-level-4-in-professional-and-digital-marketing-1986163222665', 'Fully Funded CIM Certificate Level 4 in Professional and Digital Marketing', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded CIM Level 4 in Professional and Digital Marketing

Join us for this exclusive online event to learn how you or your employees can enrol in our Funded Marketing Executive Level 4 Apprenticeship, combined with CIM Level 4 Certificate in Professional and Digital Marketing, designed for UK-based professionals. Discover More

"Just to clarify, Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: May 2026
Duration: 13 months + 3 months EPA prep
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Marketing Impact and Planning (20 weeks)

Social Media Management (16 weeks)

MarTech – AI in Marketing (12 weeks)

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 21:00)

Optional UK networking workshops; travel covered

CIM graduation ceremony in London; rewards & prizes

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Self-study: 3 hrs/week (reading + 10–20 MCQs)

Reflective report: 3 hrs/week (workplace application)

Funding & What’s Included

1. Department for Education Fund: Apprenticeship tuition (100% fund for levy payers; 95% for non-levy with 5% employer contribution – £300 total or £30/month for 10 months). This fund includes tutoring services, learning materials and marketing executive level 4 certificate.
2. Kent Business College Fund (Not Covered by DfE): Kent Business College is currently covering these costs for the first 10 learners as part of our promotional offer for this programme. This fund includes:

Optional CIM Level 4 Certificate

Membership & Exam Fees

Transportation Costs for Optional Workshops

Graduation Ceremony and Rewards

No hidden costs

Eligibility

UK resident for the past 3 years

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information meeting. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1180947130%2F45451189701%2F1%2Foriginal.20260329-193757?auto=format%2Ccompress&q=75&sharp=10&s=181136fa8eada679bf44799e1ebca338', '', '2026-05-19 12:00:00', '2026-05-19 13:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-cim-certificate-level-4-in-professional-and-digital-marketing-tickets-1986163222665', 'https://www.eventbrite.co.uk/e/fully-funded-cim-certificate-level-4-in-professional-and-digital-marketing-tickets-1986163222665', '2026-09-21 10:35:03.160586', true, true, 0, '2026-09-21 10:35:08.605611', '2026-09-21 10:35:08.605634'),
  (79, 'fully-funded-marketing-manager-level-6-with-cim-diploma-in-marketing-1989090264526', 'Fully Funded Marketing Manager Level 6 with CIM Diploma in Marketing', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded CIM Diploma Level 6 in Professional and Digital Marketing

The programme we’re offering is the Marketing Manager Level 6 Apprenticeship, combined with an optional CIM Level 6 Diploma in Professional and Digital Marketing. It’s designed for those who hold a Level 4 or 5 qualification in Marketing or Business (with a marketing focus) and wish to enhance their strategic marketing skills.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: May 2026
Duration: 17 months + 3 months EPA prep
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Strategy & Planning – Aligning marketing strategies with business goals (16 weeks)

Commercial Intelligence – Using financial & data insights (16 weeks)

Customer Journey Optimisation (16 weeks)

AI in Marketing (16 weeks)

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 21:00)

Optional UK networking workshops; travel covered

CIM graduation ceremony in London; rewards & prizes

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £450 total or £30/month for 15 months).
Kent Business College: CIM membership, exams, workshop travel, graduation extras — only for the first 10 learners per cohort.

CIM Membership, Registration & Exam Fees (10 learners)

Tutoring services (DfE funded)

Learning materials (DfE funded)

Workshop travel (10 learners)

Graduation ceremony & rewards (10 learners, incl. laptop prize)

No hidden costs

Eligibility

UK resident for the past 3 years

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Please note that places are limited, and many spaces may be fully booked before the event date. Kent Business College, in partnership with the Department for Education, currently has only 20 fully funded places available for this opportunity. To avoid disappointment, we strongly encourage you to reserve your place as early as possible. You are also welcome to book a meeting with one of our consultants at your earliest convenience to discuss the programme and secure your funded place before registrations close. You can book it from this link information meeting. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1175715183%2F45451189701%2F1%2Foriginal.20260124-134145?auto=format%2Ccompress&q=75&sharp=10&s=87a3a7e1a61b7d2922f165053d9c3394', '', '2026-05-20 12:00:00', '2026-05-20 13:30:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-marketing-manager-level-6-with-cim-diploma-in-marketing-tickets-1989090264526', 'https://www.eventbrite.co.uk/e/fully-funded-marketing-manager-level-6-with-cim-diploma-in-marketing-tickets-1989090264526', '2026-09-21 10:35:08.617858', true, true, 0, '2026-09-21 10:35:09.409719', '2026-09-21 10:35:09.409731'),
  (80, 'fully-funded-project-control-with-apm-chartered-project-professionalchpp-1989646929526', 'Fully Funded Project Control with  APM Chartered Project Professional(ChPP)', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded APM Chartered Project Professional(ChPP), PMP , Earned Value Management (APMG)  PMI-Schedule Professional

We’re pleased to invite you to join our fully funded Project Control Professional Level 6 programme, which includes five professional certificates and the prestigious Chartered Project Professional (ChPP) designation. More Details

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: May 2026

Deadline: 5th June 2026
Schedule: Weekly
Duration: 25 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel costs covered)

Operational Route - (Modules)

Project Management Professional (PMI - PMP) or APM PMQ

PMI Scheduling Professional (PMI - SP)

Cost Engineering & Earned Value Management (APMG)

Risk Management Level 1 & 2 (APM)

Project Planning & Control (APMG)

ChPP Preparation (post-EPA)

Strategic Route - (Modules)

Project Management Professional (PMP)

Management of Portfolios (APMG)

Managing Successful Programmes (Axelos)

Risk Management Level 1 & 2 (APM)

Project Management Office (PMI)

ChPP Preparation (post-EPA)

Strategic Operational Route - (Modules - Diploma Level 7 in Project Management - No Exams)

Project Management Professional (PMP)

Planning, Controlling and Leading a Project (30 credits)

Procurement Risk and Contract Management (30 credits)

Advanced Project and Logistics Management (20 credits)

Operations and Information Management for Project Managers (20 credits)

Advanced Research Methods

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

ChPP costs are covered

All Qualifications and Exams costs are covered

Student Clubs Memberships (London, Kent, Manchester, Liverpool, and Birmingham)

Private Health Care Insurance for all learners

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £1,350 total or £45/month for 30 months). This fund includes tutoring services, learning materials, and an apprenticeship certificate.

Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility Criteria

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training at the time of this programme

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Join:::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information session. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1175712602%2F45451189701%2F1%2Foriginal.20250826-164305?auto=format%2Ccompress&q=75&sharp=10&s=102ceb280ebce22541eb5a63956074ac', '', '2026-05-27 10:00:00', '2026-05-27 13:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1989646929526', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1989646929526', '2026-09-21 10:35:09.421865', true, true, 0, '2026-09-21 10:35:13.422812', '2026-09-21 10:35:13.422828'),
  (81, 'fully-funded-marketing-manager-level-6-with-cim-diploma-in-marketing-1989814216887', 'Fully Funded Marketing Manager Level 6 with CIM Diploma in Marketing', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded CIM Diploma Level 6 in Professional and Digital Marketing

The programme we’re offering is the Marketing Manager Level 6 Apprenticeship, combined with an optional CIM Level 6 Diploma in Professional and Digital Marketing. It’s designed for those who hold a Level 4 or 5 qualification in Marketing or Business (with a marketing focus) and wish to enhance their strategic marketing skills.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: May 2026
Duration: 17 months + 3 months EPA prep
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Strategy & Planning – Aligning marketing strategies with business goals (16 weeks)

Commercial Intelligence – Using financial & data insights (16 weeks)

Customer Journey Optimisation (16 weeks)

AI in Marketing (16 weeks)

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 21:00)

Optional UK networking workshops; travel covered

CIM graduation ceremony in London; rewards & prizes

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £450 total or £30/month for 15 months).
Kent Business College: CIM membership, exams, workshop travel, graduation extras — only for the first 10 learners per cohort.

CIM Membership, Registration & Exam Fees (10 learners)

Tutoring services (DfE funded)

Learning materials (DfE funded)

Workshop travel (10 learners)

Graduation ceremony & rewards (10 learners, incl. laptop prize)

No hidden costs

Eligibility

UK resident for the past 3 years

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Please note that places are limited, and many spaces may be fully booked before the event date. Kent Business College, in partnership with the Department for Education, currently has only 20 fully funded places available for this opportunity. To avoid disappointment, we strongly encourage you to reserve your place as early as possible. You are also welcome to book a meeting with one of our consultants at your earliest convenience to discuss the programme and secure your funded place before registrations close. You can book it from this link information meeting. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1175715183%2F45451189701%2F1%2Foriginal.20260124-134145?auto=format%2Ccompress&q=75&sharp=10&s=87a3a7e1a61b7d2922f165053d9c3394', '', '2026-05-27 12:00:00', '2026-05-27 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-marketing-manager-level-6-with-cim-diploma-in-marketing-tickets-1989814216887', 'https://www.eventbrite.co.uk/e/fully-funded-marketing-manager-level-6-with-cim-diploma-in-marketing-tickets-1989814216887', '2026-09-21 10:35:13.433873', true, true, 0, '2026-09-21 10:35:15.150487', '2026-09-21 10:35:15.150497'),
  (82, 'transforming-talent-in-marketing-project-management-project-controls-1986761677660', 'Transforming Talent in Marketing, Project Management & Project Controls', 'Business & Professional', 'eventbrite', 7, 'in_person', '', '', 'An Exclusive Employer Event for Early Careers, Talent Acquisition and L&D Leaders

Event Details

Venue: London Marriott Hotel Marble Arch

Date: 5th June 2026

Time: 9:00 AM – 5:00 PM

Format: In-person, by invitation (limited capacity)

Who This Event Is For

This event has been carefully designed for decision-makers and influencers responsible for workforce development, talent strategy, and organisational capability building, including:

Early Careers Managers

Talent Acquisition Directors and Managers

HR Business Partners

Learning & Development Managers

Heads of People and Organisational Development

Workforce Planning and Transformation Leads

If you are responsible for recruiting, developing, or retaining talent, this event will provide you with practical strategies and actionable insights you can take back into your organisation immediately.

Event Overview

In today’s increasingly competitive and cost-conscious environment, organisations are under growing pressure to attract high-quality talent, close critical skills gaps, and build sustainable pipelines for future leadership—all whilst maintaining efficiency and controlling costs.

This exclusive employer event, hosted by Kent Business College, is designed to support organisations through a fully integrated workforce solution, combining strategic recruitment services with structured training and upskilling programmes.

1- A Complete Fully Funded Recruitment Solution – From Attraction to Selection

We go far beyond traditional recruitment methods such as job board advertising or basic candidate sourcing.

Our approach provides a comprehensive, end-to-end recruitment service, supporting employers in identifying and selecting the very best talent across all levels, including:

School leavers and early careers entrants

Junior and mid-level professionals

Senior hires and leadership roles through targeted headhunting

To ensure quality and suitability, we incorporate advanced assessment techniques, including:

Interviews and Screening

Cognitive and IQ-based assessments

Aptitude testing to evaluate capability and potential

RAISEC profiling to align personality with career pathways

Psychometric and psychomotor assessments to evaluate behaviour, performance, and role fit

This enables organisations to make robust, evidence-based hiring decisions, reducing recruitment risk and improving long-term retention.

2- Training and Upskilling – Tailored, Structured, and Fully Funded

Alongside recruitment, we provide a comprehensive suite of training and upskilling programmes, designed to develop capability across all organisational levels.

Our programmes are:

Tailored based on years of professional experience, ensuring relevance for:

Entry-level employees

Mid-career professionals

Senior managers and leaders

Customised to sector-specific pathways, ensuring direct alignment with organisational needs

Delivered through a structured approach that integrates:

Professional qualifications

Practical, work-based application

Measurable performance outcomes

Through effective utilisation of Apprenticeship Levy funding, these programmes can be delivered at no additional cost, enabling organisations to invest in their workforce without increasing training budgets.

🎓 Our Areas of Specialisation

Kent Business College is a leading provider of apprenticeship programmes, with particular strength in:

Marketing Executive Level 4 (CIM Level 4 Certificate in Professional and Digital Marketing)

Marketing Manager Level 6 (CIM Level 6 Diploma in Professional and Digital Marketing)

Marketing Research Level 4 (Marketing Research Society Certificate)

Sales Executive Level 4

Project Management programmes (including Associate Project Manager Level 4 - PMP or APM PMQ)

Project Control Professional Level 6 (APM - Chartered Professional Project (APM- ChPP), PMI - Project Management Professional, APMG- Earned Value Management and Project Planning and Control, PMI - Schedule Professional, PMI - Project Management Office, APMG - Managing Portfolios)

Our programmes are designed not only to meet apprenticeship standards, but to align with industry practices, professional body frameworks, and real organisational needs.

What You Will Gain from Attending

During this event, you will gain practical insight into how to:

Attract and recruit high-calibre talent using advanced assessment methods

Develop structured career pathways from entry-level to senior leadership

Upskill and reskill your workforce in a cost-effective and sustainable way

Align recruitment and development strategies with business objectives

Maximise return on investment through fully funded training

A Practical, Employer-Focused Experience

This is not a theoretical session. It is a practical, employer-led experience, grounded in real delivery, proven outcomes, and strong industry partnerships.

You will leave with clear, actionable strategies to enhance both your recruitment approach and your workforce development model.

🗓️ Full Agenda

☕ 9:00 – 10:00 | Registration, Check-in and Professional Networking

The day will begin with a relaxed and welcoming networking session, allowing you to:

Connect with fellow employers across multiple sectors

Exchange ideas, challenges, and best practices

Meet the Kent Business College leadership and programme teams

This is an excellent opportunity to build meaningful professional connections before the formal sessions begin.

🚀 10:00 – 11:00 | Unlocking the Apprenticeship Levy: From Cost Centre to Strategic Asset

Transform how your organisation approaches recruitment and workforce development

This session will provide a comprehensive and practical overview of how to maximise the value of your apprenticeship levy.

We will explore:

How to recruit apprentices across multiple entry points:

School leavers

Graduates

Career changers

Existing employees

How apprenticeships can support development at all levels:

Junior roles

Mid-level professionals

Senior leadership and C-suite development

How to utilise levy funding effectively to:

Reduce recruitment costs

Improve retention

Build long-term talent pipelines

Real-world employer examples demonstrating:

Increased productivity

Improved employee engagement

Strong return on investment

This session will challenge common misconceptions and provide a clear roadmap for embedding apprenticeships into your workforce strategy.

🏗️ 11:15 – 12:15 | Project Management and Project Control Programmes

This session introduces a structured, multi-pathway approach to project and programme capability development, designed to support organisations across service sectors, engineering environments, and strategic transformation initiatives.

At Kent Business College, we recognise that “project management” is not a one-size-fits-all discipline. Therefore, our programmes are designed across three distinct but interconnected pathways, each aligned to specific roles, sectors, and levels of responsibility.

🔹 Pathway 1: Project Management for Service Sectors

This pathway is designed for professionals operating in business, commercial, digital, and service-based environments, where project delivery is focused on value creation, customer outcomes, and organisational performance.

It is particularly suitable for:

Business and operations managers

Marketing and commercial teams

Digital and transformation professionals

Early to mid-career project managers

The curriculum includes:

Project Management Institute – Project Management Professional (PMP)

AI in Project Management (practical application of emerging technologies)

Microsoft Project application and scheduling tools

This pathway focuses on:

Delivering projects efficiently within service environments

Enhancing planning, coordination, and stakeholder engagement

Integrating digital tools and AI into project delivery

Improving consistency and performance across business functions

🔹 Pathway 2: Project Controls in Engineering and Infrastructure

This pathway is tailored for professionals working in engineering, construction, infrastructure, and complex technical projects, where precision, forecasting, and control are critical.

It is particularly suitable for:

Project planners and schedulers

Cost engineers and commercial professionals

Project control specialists

Engineers progressing into leadership roles

The curriculum is aligned with globally recognised technical standards, including:

Project Management Institute – Scheduling Professional (PMI-SP)

APMG International – Earned Value Management and Cost Engineering

APMG International – Project Planning and Control

Association for Project Management – Risk Management

This pathway focuses on:

Strengthening planning, scheduling, and forecasting capability

Improving cost control and performance measurement

Enhancing risk identification and mitigation strategies

Supporting high-quality delivery of large-scale, complex projects

🔹 Pathway 3: Strategic Project and Programme Leadership

This pathway is designed for senior professionals and leaders responsible for delivering organisational change, transformation programmes, and strategic objectives.

It is suitable for:

Senior project and programme managers

Heads of function and transformation leads

Engineers and professionals transitioning into strategic leadership roles

The curriculum includes internationally recognised frameworks, such as:

AXELOS – Managing Successful Programmes (MSP)

APMG International – Managing Portfolios (MoP)

Project Management Institute – Project Management Office (PMO)

AXELOS – P3O (Portfolio, Programme and Project Offices)

This pathway focuses on:

Aligning projects and programmes with organisational strategy

Managing portfolios and prioritising investments

Establishing governance frameworks and PMO structures

Leading complex transformation initiatives

🎓 Programme Structure and Progression

Our programmes are designed to support clear progression pathways:

Level 4 (Associate Level):
Focuses on developing core capability in a single discipline, providing strong foundational knowledge and practical skills.

Level 6 (Advanced Level):
Covers five integrated topics, aligned to the chosen pathway, enabling learners to develop advanced, multi-dimensional expertise and leadership capability. Chartered Professional Projects included (APM - ChPP)

This structured approach ensures that development is:

Relevant to the individual’s role and experience

Aligned to organisational needs

Scalable from entry-level to senior leadership

📊 12:30 – 1:30 | Marketing Programmes (CIM Level and Level 6 in Professional and Digital Marketing)

Developing marketing professionals who deliver measurable business impact

This session will focus on marketing programmes aligned with industry standards and professional bodies.

Programmes include:

Marketing Executive Level 4 (CIM Level 4 Certificate in Professional & Digital Marketing)

Marketing Manager Level 6 (CIM Level 6 Diploma in Professional & Digital Marketing)

These programmes are designed to:

Develop strategic marketing capability

Enhance digital and commercial awareness

Strengthen brand, customer, and campaign management skills

Support progression from entry-level roles to senior leadership positions

You will gain insight into how organisations are using these programmes to drive growth, improve performance, and future-proof their marketing teams.

🍽️ 1:30 – 2:30 | Networking Lunch (Open Buffet)

A high-quality buffet lunch will be provided, offering further opportunity to:

Continue conversations with peers

Explore collaboration opportunities

Speak directly with programme leaders and advisors

🏛️ 2:30 – 3:30 | Governance Board Membership: Shape the Future of Workforce Development

An opportunity to influence strategy, quality, and innovation

Kent Business College invites selected employers to become part of its Governance Board.

As a member, you will:

Contribute to strategic direction and decision-making

Influence programme design and quality assurance

Strengthen your organisation’s position as an industry leader

Engage directly with education and policy developments

Participation is by application and invitation, ensuring a high-level and impactful board. If you are interested to be a member of the governance board at Kent Business College, please apply from this Link

🤝 3:45 – 4:45 | Employer Forum: Co-Designing Future-Ready Curriculum

Ensuring training reflects real industry needs

This interactive session will provide a platform for employers to:

Share insights into current and emerging skills gaps

Influence curriculum design and delivery

Collaborate with other organisations and industry leaders

Help shape the future of apprenticeship provision

This is a genuine opportunity to ensure that training programmes are aligned with real-world business requirements, not just academic frameworks.

🎁 A Premium Learner Experience (Fully Funded by Kent Business College)

Kent Business College is committed to delivering an exceptional learner experience, going significantly beyond standard apprenticeship provision.

Each learner benefits from:

Private healthcare insurance

Weekly live interactive sessions

Dedicated monthly one-to-one coaching

Three fully funded face-to-face events in London (including travel costs)

A complimentary Diploma Level 7 in Strategy and Leadership

A free tablet device

Access to all learning materials at no cost

Access to a physical book library with free borrowing

Complimentary professional memberships

Access to exclusive regional networking clubs, including:

Sponsored study spaces

Guest speaker events

Fortnightly professional networking dinners

Importantly, these additional benefits are fully funded by Kent Business College, not the Department for Education.

⚠️ Limited Capacity – High Quality by Design

To ensure the highest standards of delivery and learner support:

We operate a cap on learner numbers

We limit the number of fully funded employer partnerships

As a result, places for this event—and subsequent programme enrolments—are strictly limited.

🏆 Why Kent Business College?

Kent Business College has established itself as a leading provider of apprenticeship programmes in the UK.

Number one provider for Marketing Executive Level 4 (approximately 200 learners)

Number one provider for Marketing Manager Level 6 (approximately 200 learners)

Number one provider for Project Control Professional Level 6

Retention rate is one of the lowest in the UK (93%)

Student Satisfaction is 4.48 out of 5

Employer Satisfaction is 4.6 out of 5

🤝 Our Employer Partnerships

We are proud to work with respected organisations across multiple sectors, including:

Network Rail

London School of Economics

Employers across engineering, infrastructure, professional services, and commercial sectors

Limited Availability – Registration Confirmation Required

Due to the exclusive nature of this event and our commitment to delivering a high-quality experience, places are strictly limited.

Submitting your registration does not automatically guarantee attendance.
A member of our team will contact you directly to:

Confirm your interest

Ensure the event aligns with your role and organisation

Secure your place

Places will be allocated on a first come, first served basis, subject to confirmation.

👉 We kindly encourage early registration to avoid disappointment.

🚆 Travel & Transportation Support

Kent Business College is pleased to offer covered transportation costs for confirmed attendees travelling to this event.

Please note:

Travel costs are only covered upon confirmation of attendance

You must receive prior approval from the event team before booking

To arrange and confirm your travel support, please contact:
📩 office@kentbusinesscollege.org

Our team will guide you through the process and ensure your arrangements are approved in advance.

Contact

For further information or group bookings:

Contact Alice Saudners at office@kentbusinesscollege.org

You can book a meeting with one of our experts from this link

Alice Saunders,

Kent Business College

www.kentbusinesscollege.com', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1181459785%2F45451189701%2F1%2Foriginal.20260405-131737?auto=format%2Ccompress&q=75&sharp=10&s=b4b85ca4778483564513fabe602b3bf0', '', '2026-06-05 08:00:00', '2026-06-05 16:00:00', 'Europe/London', 'Marble Arch Hotel, Upper Berkeley Street, London, W1H 5QR', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/transforming-talent-in-marketing-project-management-project-controls-tickets-1986761677660', 'https://www.eventbrite.co.uk/e/transforming-talent-in-marketing-project-management-project-controls-tickets-1986761677660', '2026-09-21 10:35:15.164001', true, true, 0, '2026-09-21 10:35:15.916927', '2026-09-21 10:35:15.916937'),
  (83, 'fully-funded-project-management-professional-with-ai-dashboards-and-agents-1992524555583', 'Fully Funded Project Management Professional with AI Dashboards and Agents', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'September Intake: Project Management Professional (PMP) Certificate with Practical Applications in AI Dashboards and AI Agents

We are pleased to invite you to join our fully funded Project Management Professional (PMP) programme, featuring practical applications in AI Agents and AI Dashboards.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026

Deadline: 8th September 2026
Schedule: Weekly
Duration: 12 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel costs covered)

Topics

Project Management Governance

Agile Project Management

Project Scope Management

Project Cost Management

Project Schedule Management

Project Quality Management

Project Risk Management

Project Communications, Stakeholder Engagements, and Reporting

Project Procurement

Project Leadership and Team Management

AI Dashboards Development and Design

AI Agents using N8N

Programme Highlights

PMP Eigth Edition - PMP Exam Costs covered 

PMI Revision Kit is covered 

PMI Membership is covered 

AI in Project Management Certificate 

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

All Qualifications and Exams costs are covered

Student Clubs Memberships (London, Kent, Manchester, Liverpool, and Birmingham)

London Masterclass events are covered 

Private Health Care Insurance for all learners

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

The total cost of the programme is £8,000, with £7,000 funded by the Department for Education and an additional £1,000 covered by the Kent Business College Fund.

Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £350 total or £35/month for 10 months). This fund includes tutoring services, learning materials, and an apprenticeship certificate.

Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility Criteria

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training at the time of this programme

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

If you are not eligible for apprenticeship funding

You may not be eligible for Department for Education apprenticeship funding if your employer is unable to support your apprenticeship, if you are self-employed, unemployed, or if you do not live and work in England.

However, you may still be eligible for support through the Kent Business College Fund and the Institute of Project Controls (IPC).

Unemployed, self-employed, or not supported by your employer:
You may be eligible for a 70% bursary, reducing the programme fee to £2,400. Payment can be spread over 20 months with no interest, at £120 per month.

Employed and funded directly by your employer:
Your employer may be eligible for a 50% bursary, reducing the programme fee to £4,000. Payment can be spread over 20 months with no interest, at £200 per month.

All bursaries are subject to acceptance by Kent Business College, and places are limited.

To check your eligibility, please book a meeting with one of our consultants or email: office@kentbusinesscollege.org

::: What''s Next - How to Join:::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information session. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org
Alice Saunders

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186878052%2F45451189701%2F1%2Foriginal.20260614-182224?auto=format%2Ccompress&q=75&sharp=10&s=f8689363adc72c5693f223d4d15ca5e4', '', '2026-07-10 14:00:00', '2026-07-10 15:30:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-management-professional-with-ai-dashboards-and-agents-tickets-1992524555583', 'https://www.eventbrite.co.uk/e/fully-funded-project-management-professional-with-ai-dashboards-and-agents-tickets-1992524555583', '2026-09-21 10:35:15.929506', true, true, 0, '2026-09-21 10:35:16.452528', '2026-09-21 10:35:16.452539'),
  (84, 'fully-funded-project-management-professional-with-ai-dashboards-and-agents-1991870034894', 'Fully Funded Project Management Professional with AI Dashboards and Agents', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'September Intake: Project Management Professional Certificate with Practical Applications in AI Dashboards and AI Agents

We are pleased to invite you to join our fully funded Project Management Professional development programme, featuring practical applications in AI Agents and AI Dashboards.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026

Deadline: 8th September 2026
Schedule: Weekly
Duration: 12 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel costs covered)

Topics

Project Management Governance

Agile Project Management 

Project Scope Management

Project Cost Management

Project Schedule Management

Project Quality Management

Project Risk Management

Project Communications, Stakeholder Engagements, and Reporting 

Project Procurement

Project Leadership and Team Management 

AI Dashboards Development and Design

AI Agents using N8N

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

ChPP costs are covered

All Qualifications and Exams costs are covered

Student Clubs Memberships (London, Kent, Manchester, Liverpool, and Birmingham)

Private Health Care Insurance for all learners

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

The total cost of the programme is £8,000, with £7,000 funded by the Department for Education and an additional £1,000 covered by the Kent Business College Fund.

Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £350 total or £35/month for 10 months). This fund includes tutoring services, learning materials, and an apprenticeship certificate.

Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility Criteria

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training at the time of this programme

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

If you are not eligible for apprenticeship funding

You may not be eligible for Department for Education apprenticeship funding if your employer is unable to support your apprenticeship, if you are self-employed, unemployed, or if you do not live and work in England.

However, you may still be eligible for support through the Kent Business College Fund and the Institute of Project Controls (IPC).

Unemployed, self-employed, or not supported by your employer:
You may be eligible for a 70% bursary, reducing the programme fee to £2,400. Payment can be spread over 20 months with no interest, at £120 per month.

Employed and funded directly by your employer:
Your employer may be eligible for a 50% bursary, reducing the programme fee to £4,000. Payment can be spread over 20 months with no interest, at £200 per month.

All bursaries are subject to acceptance by Kent Business College, and places are limited.

To check your eligibility, please book a meeting with one of our consultants or email: office@kentbusinesscollege.org

::: What''s Next - How to Join:::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information session. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org
Alice Saunders

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186878052%2F45451189701%2F1%2Foriginal.20260614-182224?auto=format%2Ccompress&q=75&sharp=10&s=f8689363adc72c5693f223d4d15ca5e4', '', '2026-07-13 08:00:00', '2026-07-13 10:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-management-professional-with-ai-dashboards-and-agents-tickets-1991870034894', 'https://www.eventbrite.co.uk/e/fully-funded-project-management-professional-with-ai-dashboards-and-agents-tickets-1991870034894', '2026-09-21 10:35:16.463676', true, true, 0, '2026-09-21 10:35:17.084020', '2026-09-21 10:35:17.084029'),
  (85, 'transforming-talent-in-marketing-project-management-project-controls-1991837661063', 'Transforming Talent in Marketing, Project Management & Project Controls', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'An Exclusive Employer Event for Employers, Early Careers, Talent Acquisition and L&D Leaders

Looking for a funded programme that goes beyond training and delivers real professional recognition?

Established in 2016, Kent Business College is a leading UK provider of funded professional programmes for ambitious employees, middle managers and senior leaders.

We are proud to be published as number one in the UK for learner numbers, satisfaction and retention across our Marketing Level 4, Marketing Level 6 and Project Controls programmes.

Kent Business College offers a unique funded package, combining Department for Education apprenticeship funding with additional investment from the College. This includes access to professional qualifications from CIM, PMI, APM and APMG, as well as support towards the APM Chartered Project Professional pathway.

We also cover the cost of our London Masterclass Events, not only for learners, but also for employers, heads of training and apprenticeship leads.

Join this online event to discover our programmes, understand the funding, and ask your questions directly to our team.

Who This Event Is For

This event has been carefully designed for decision-makers and influencers responsible for workforce development, talent strategy, and organisational capability building, including:

Early Careers Managers

Talent Acquisition Directors and Managers

HR Business Partners

Learning & Development Managers

Heads of People and Organisational Development

Workforce Planning and Transformation Leads

If you are responsible for recruiting, developing, or retaining talent, this event will provide you with practical strategies and actionable insights you can take back into your organisation immediately.

 Our Areas of Specialisation

Kent Business College is a leading provider of apprenticeship programmes, with particular strength in:

Marketing & Sales

Marketing Executive Level 4 (CIM Level 4 Certificate in Professional and Digital Marketing)

Marketing Manager Level 6 (CIM Level 6 Diploma in Professional and Digital Marketing)

Marketing Research Level 4 (Marketing Research Society Certificate)

Sales Executive Level 4

Project Management programmes  

Project Technician Level 3 (APM/PFQ or CAPM, PMI - Schedule Professional, and AI Dashboards and AI Agents in Project Controls)

Associate Project Manager Level 4 (APM - PMQ, or PMI - PMP) 

Project Control Professional Level 6 (APM - Chartered Professional Project (APM- ChPP), PMI - Project Management Professional, APMG- Earned Value Management and Project Planning and Control, PMI - Schedule Professional, PMI - Project Management Office, APMG - Managing Portfolios)

Our programmes are designed not only to meet apprenticeship standards, but to align with industry practices, professional body frameworks, and real organisational needs.

What is covered by the Kent Business College Fund?
These benefits are funded by Kent Business College and are separate from Department for Education apprenticeship funding.

Professional memberships, including CIM, PMI, APM, CaSA and the Institute of Project Controls.

Professional exam fees, including examples such as CIM Certificate Level 4, CIM Diploma Level 6, APM PMQ, APM PFQ, APM Risk Management, APMG Project Planning and Control, PMI PMP and PMI Scheduling Professional.

Attendance at professional London Masterclass Events at the Marble Arch Hotel, held three times a year.

Event support for apprentices, employers, line managers and heads of training, including transport support and open buffet lunch.

Private healthcare insurance during the programme.

Graduation ceremony at Rochester Cathedral to celebrate learner achievement.

Places for our September intake are limited.

The Kent Business College Fund is available on a limited basis and will be allocated on a first-come, first-served basis to eligible learners and employers.

To avoid missing out, we strongly recommend booking a one-to-one meeting with one of our programme experts before the event day. This will give you the opportunity to check eligibility, understand the funding package, explore the right programme route, and secure your next steps early. You can book a meeting with one of our experts from this link

Or contact Alice Saudners at office@kentbusinesscollege.org

Alice Saunders,

Kent Business College

www.kentbusinesscollege.com', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186836825%2F45451189701%2F1%2Foriginal.20260613-200304?auto=format%2Ccompress&q=75&sharp=10&s=a637e6868ff8fa6feccddf9a06ee1257', '', '2026-07-13 12:00:00', '2026-07-13 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/transforming-talent-in-marketing-project-management-project-controls-tickets-1991837661063', 'https://www.eventbrite.co.uk/e/transforming-talent-in-marketing-project-management-project-controls-tickets-1991837661063', '2026-09-21 10:35:17.095614', true, true, 0, '2026-09-21 10:35:17.671605', '2026-09-21 10:35:17.671616'),
  (86, 'fully-funded-cim-diploma-in-professional-and-digital-marketing-1992449628474', 'Fully Funded CIM Diploma in Professional and Digital Marketing', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded CIM Diploma Level 6 and Level 4 in Professional and Digital Marketing

We are offering the CIM Level 4 Certificate in Professional and Digital Marketing as part of our Marketing Executive Level 4 Apprenticeship, and the CIM Level 6 Diploma in Professional and Digital Marketing as part of our Marketing Manager Level 6 Apprenticeship.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026
Duration

Marketing Executive Level 4 + CIM Certificate Level 4
12 months + 3 months EPA preparation

Marketing Manager Level 6 + CIM Diploma Level 6
17 months + 3 months EPA preparation

Combined Level 4 + Level 6 + Diploma Level 7 in Strategy and Leadership
Completed in approximately 2 years, with the Diploma Level 7 funded by Kent Business College.

Format:

Online delivery (2 hours a week)

Optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Marketing Manager Level 6 + CIM Diploma Level 6

Strategy & Planning – Aligning marketing strategies with business goals (16 weeks)

Commercial Intelligence – Using financial & data insights (16 weeks)

Customer Journey Optimisation (16 weeks)

AI in Marketing (16 weeks)

Marketing Executive Level 4 + CIM Certificate Level 4

Marketing Impact and Planning (16 weeks)

Social Media Management + Project Management (16 weeks)

MarTech – AI in Marketing (16 weeks)

Optional: Content Marketing, Search Engine Optimisation

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 21:00)

Optional UK networking workshops; travel covered

CIM graduation ceremony in London; rewards & prizes

Study Workload

8 hrs/week:

Live Online Classes: 2 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £450 total or £30/month for 15 months for Level 6 and 300 GBP for Level 4).
Kent Business College: CIM membership, exams, workshop travel, graduation extras — only for the first 10 learners per cohort.

Kent Business College Fund covers

CIM Membership, Registration & Exam Fees

Tutoring services (DfE funded)

Learning materials (DfE funded)

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

Private Health Care Insurance

Cost of travelling to attend our MasterClass events in London

Cost of attending our MasterClass Events in London

Diploma Level 7 in Strategy and Leadership — Saturday morning sessions, covered by Kent Business College, not the Department for Education, for eligible learners progressing through our Level 4 and Level 6 apprenticeship programmes.

No hidden costs

Eligibility

UK resident for the past 3 years

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Please note that places are limited, and many spaces may be fully booked before the event date.

Kent Business College, in partnership with the Department for Education, currently has only 20 fully funded places available for this opportunity. To avoid disappointment, we strongly encourage you to reserve your place as early as possible.

You are also welcome to book a meeting with one of our consultants at your earliest convenience to discuss the programme and secure your funded place before registrations close.

You can book it from this link information meeting.

We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1187512525%2F45451189701%2F1%2Foriginal.20260623-202833?auto=format%2Ccompress&q=75&sharp=10&s=8b4a810f3cde7ebdc1830c9a52ed1003', '', '2026-07-13 14:00:00', '2026-07-13 16:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-cim-diploma-in-professional-and-digital-marketing-tickets-1992449628474', 'https://www.eventbrite.co.uk/e/fully-funded-cim-diploma-in-professional-and-digital-marketing-tickets-1992449628474', '2026-09-21 10:35:17.679552', true, true, 0, '2026-09-21 10:35:18.342788', '2026-09-21 10:35:18.342815'),
  (87, 'fully-funded-project-control-with-apm-chartered-project-professionalchpp-1991840517607', 'Fully Funded Project Control with  APM Chartered Project Professional(ChPP)', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded APM Chartered Project Professional(ChPP), PMP , Earned Value Management (APMG)  PMI-Schedule Professional

We’re pleased to invite you to join our fully funded Project Control Professional Level 6 programme, which includes five professional certificates and the prestigious Chartered Project Professional (ChPP) designation. More Details

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026

Deadline: 8th September 2026
Schedule: Weekly
Duration: 27 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel costs covered)

Operational Route - (Modules)

Project Management Professional (PMI - PMP) or APM PMQ

PMI Scheduling Professional (PMI - SP)

Cost Engineering & Earned Value Management (APMG)

Risk Management Level 1 & 2 (APM)

Project Planning & Control (APMG)

ChPP Preparation (post-EPA)

Strategic Route - (Modules)

Project Management Professional (PMP)

Management of Portfolios (APMG)

Managing Successful Programmes (Axelos)

Risk Management Level 1 & 2 (APM)

Project Management Office (PMI)

ChPP Preparation (post-EPA)

Strategic Operational Route - (Modules - Diploma Level 7 in Project Management - No Exams)

Project Management Professional (PMP)

Planning, Controlling and Leading a Project (30 credits)

Procurement Risk and Contract Management (30 credits)

Advanced Project and Logistics Management (20 credits)

Operations and Information Management for Project Managers (20 credits)

Advanced Research Methods

Certified Level 6 in Project Management Office (Accredited Assessment by APM for ChPP)

Project Management Office

Project Planning and Control

Risk, Issue, and Quality Management

Stakeholder, Communications, and Reporting Systems

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

ChPP costs are covered

All Qualifications and Exams costs are covered

Student Clubs Memberships (London, Kent, Manchester, Liverpool, and Birmingham)

Private Health Care Insurance for all learners

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £1,350 total or £45/month for 30 months). This fund includes tutoring services, learning materials, and an apprenticeship certificate.

Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility Criteria

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training at the time of this programme

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Join:::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information session. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org
Alice Saunders

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186840866%2F45451189701%2F1%2Foriginal.20260613-214940?auto=format%2Ccompress&q=75&sharp=10&s=1922a306b298d90f614a751d1a60a63e', '', '2026-07-14 10:00:00', '2026-07-14 12:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1991840517607', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1991840517607', '2026-09-21 10:35:18.355232', true, true, 0, '2026-09-21 10:35:18.933182', '2026-09-21 10:35:18.933192'),
  (88, 'fully-funded-project-control-with-apm-chartered-project-professionalchpp-1991852716093', 'Fully Funded Project Control with  APM Chartered Project Professional(ChPP)', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded APM Chartered Project Professional(ChPP), PMP , Earned Value Management (APMG)  PMI-Schedule Professional

We’re pleased to invite you to join our fully funded Project Control Professional Level 6 programme, which includes five professional certificates and the prestigious Chartered Project Professional (ChPP) designation. More Details

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026

Deadline: 8th September 2026
Schedule: Weekly
Duration: 26 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel costs covered)

Operational Route - (Modules)

Project Management Professional (PMI - PMP) or APM PMQ

PMI Scheduling Professional (PMI - SP)

Cost Engineering & Earned Value Management (APMG)

Risk Management Level 1 & 2 (APM)

Project Planning & Control (APMG)

ChPP Preparation (post-EPA)

Strategic Route - (Modules)

Project Management Professional (PMP)

Management of Portfolios (APMG)

Managing Successful Programmes (Axelos)

Risk Management Level 1 & 2 (APM)

Project Management Office (PMI)

ChPP Preparation (post-EPA)

Strategic Operational Route - (Modules - Diploma Level 7 in Project Management - No Exams)

Project Management Professional (PMP)

Planning, Controlling and Leading a Project (30 credits)

Procurement Risk and Contract Management (30 credits)

Advanced Project and Logistics Management (20 credits)

Operations and Information Management for Project Managers (20 credits)

Advanced Research Methods

Certified Level 6 in Project Management Office (Accredited Assessment by APM for ChPP)

Project Management Office

Project Planning and Control

Risk, Issue, and Quality Management

Stakeholder, Communications, and Reporting Systems

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

ChPP costs are covered

All Qualifications and Exams costs are covered

Student Clubs Memberships (London, Kent, Manchester, Liverpool, and Birmingham)

Private Health Care Insurance for all learners

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £1,350 total or £45/month for 30 months). This fund includes tutoring services, learning materials, and an apprenticeship certificate.

Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility Criteria

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training at the time of this programme

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Join:::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information session. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org
Alice Saunders

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186839878%2F45451189701%2F1%2Foriginal.20260613-212459?auto=format%2Ccompress&q=75&sharp=10&s=7605c328397fb3cab5dc626c715bc3a8', '', '2026-08-17 12:00:00', '2026-08-17 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1991852716093', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1991852716093', '2026-09-21 10:35:18.945058', true, true, 0, '2026-09-21 10:35:19.485324', '2026-09-21 10:35:19.485334'),
  (89, 'upskill-your-team-with-dfe-and-kent-business-college-funding-1991852981888', 'Upskill Your Team with DfE and Kent Business College Funding', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Limited September Places: Upskill Your Workforce with Department for Education Funding and the Kent Business College Fund

Looking for a funded programme that goes beyond training and delivers real professional recognition?

Established in 2016, Kent Business College is a leading UK provider of funded professional programmes for ambitious employees, middle managers and senior leaders.

We are proud to be published as number one in the UK for learner numbers, satisfaction and retention across our Marketing Level 4, Marketing Level 6 and Project Controls programmes.

Kent Business College offers a unique funded package, combining Department for Education apprenticeship funding with additional investment from the College. This includes access to professional qualifications from CIM, PMI, APM and APMG, as well as support towards the APM Chartered Project Professional pathway.

We also cover the cost of our London Masterclass Events, not only for learners, but also for employers, heads of training and apprenticeship leads.

Join this online event to discover our programmes, understand the funding, and ask your questions directly to our team.

Who This Event Is For

This event has been carefully designed for decision-makers and influencers responsible for workforce development, talent strategy, and organisational capability building, including:

Early Careers Managers

Talent Acquisition Directors and Managers

HR Business Partners

Learning & Development Managers

Heads of People and Organisational Development

Workforce Planning and Transformation Leads

If you are responsible for recruiting, developing, or retaining talent, this event will provide you with practical strategies and actionable insights you can take back into your organisation immediately.

Our Areas of Specialisation

Kent Business College is a leading provider of apprenticeship programmes, with particular strength in:

Marketing & Sales

Marketing Executive Level 4 (CIM Level 4 Certificate in Professional and Digital Marketing)

Marketing Manager Level 6 (CIM Level 6 Diploma in Professional and Digital Marketing)

Marketing Research Level 4 (Marketing Research Society Certificate)

Sales Executive Level 4

Project Management programmes

Associate Project Manager Level 4 (APM - PMQ, or PMI - PMP)

Project Control Professional Level 6 (APM - Chartered Professional Project (APM- ChPP), PMI - Project Management Professional, APMG- Earned Value Management and Project Planning and Control, PMI - Schedule Professional, PMI - Project Management Office, APMG - Managing Portfolios)

Our programmes are designed not only to meet apprenticeship standards, but to align with industry practices, professional body frameworks, and real organisational needs.

What is covered by the Kent Business College Fund?
These benefits are funded by Kent Business College and are separate from Department for Education apprenticeship funding.

Professional memberships, including CIM, PMI, APM, CaSA and the Institute of Project Controls.

Professional exam fees, including examples such as CIM Certificate Level 4, CIM Diploma Level 6, APM PMQ, APM PFQ, APM Risk Management, APMG Project Planning and Control, PMI PMP and PMI Scheduling Professional.

Attendance at professional London Masterclass Events at the Marble Arch Hotel, held three times a year.

Event support for apprentices, employers, line managers and heads of training, including transport support and open buffet lunch.

Private healthcare insurance during the programme.

Graduation ceremony at Rochester Cathedral to celebrate learner achievement.

Places for our September intake are limited.

The Kent Business College Fund is available on a limited basis and will be allocated on a first-come, first-served basis to eligible learners and employers.

To avoid missing out, we strongly recommend booking a one-to-one meeting with one of our programme experts before the event day. This will give you the opportunity to check eligibility, understand the funding package, explore the right programme route, and secure your next steps early. You can book a meeting with one of our experts from this link

Or contact Alice Saudners at office@kentbusinesscollege.org

Alice Saunders,

Kent Business College

nt Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186860489%2F45451189701%2F1%2Foriginal.20260614-091241?auto=format%2Ccompress&q=75&sharp=10&s=58851b4145a4487d834b54dcff0d8d8e', '', '2026-08-18 12:00:00', '2026-08-18 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/upskill-your-team-with-dfe-and-kent-business-college-funding-tickets-1991852981888', 'https://www.eventbrite.co.uk/e/upskill-your-team-with-dfe-and-kent-business-college-funding-tickets-1991852981888', '2026-09-21 10:35:19.497633', true, true, 0, '2026-09-21 10:35:20.071700', '2026-09-21 10:35:20.071732'),
  (90, 'fully-funded-cim-level-4-certificate-in-professional-and-digital-marketing-1994820188884', 'Fully Funded CIM Level 4 Certificate in Professional and Digital Marketing', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded Chartered Institute of Marketing Level 4 in Professional and Digital Marketing with Marketing Executive Level 4

We’re pleased to invite you to join our fully funded Project Control Professional Level 6 programme, which includes five professional certificates and the prestigious Chartered Project Professional (ChPP) designation. More Details

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026

Deadline: 8th September 2026
Schedule: Weekly
Duration: 26 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel costs covered)

Operational Route - (Modules)

Project Management Professional (PMI - PMP) or APM PMQ

PMI Scheduling Professional (PMI - SP)

Cost Engineering & Earned Value Management (APMG)

Risk Management Level 1 & 2 (APM)

Project Planning & Control (APMG)

ChPP Preparation (post-EPA)

Strategic Route - (Modules)

Project Management Professional (PMP)

Management of Portfolios (APMG)

Managing Successful Programmes (Axelos)

Risk Management Level 1 & 2 (APM)

Project Management Office (PMI)

ChPP Preparation (post-EPA)

Strategic Operational Route - (Modules - Diploma Level 7 in Project Management - No Exams)

Project Management Professional (PMP)

Planning, Controlling and Leading a Project (30 credits)

Procurement Risk and Contract Management (30 credits)

Advanced Project and Logistics Management (20 credits)

Operations and Information Management for Project Managers (20 credits)

Advanced Research Methods

Certified Level 6 in Project Management Office (Accredited Assessment by APM for ChPP)

Project Management Office

Project Planning and Control

Risk, Issue, and Quality Management

Stakeholder, Communications, and Reporting Systems

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

ChPP costs are covered

All Qualifications and Exams costs are covered

Student Clubs Memberships (London, Kent, Manchester, Liverpool, and Birmingham)

Private Health Care Insurance for all learners

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £1,350 total or £45/month for 30 months). This fund includes tutoring services, learning materials, and an apprenticeship certificate.

Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility Criteria

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training at the time of this programme

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Join:::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information session. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org
Alice Saunders

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186839878%2F45451189701%2F1%2Foriginal.20260613-212459?auto=format%2Ccompress&q=75&sharp=10&s=7605c328397fb3cab5dc626c715bc3a8', '', '2026-08-20 12:00:00', '2026-08-20 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'draft', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-cim-level-4-certificate-in-professional-and-digital-marketing-tickets-1994820188884', 'https://www.eventbrite.co.uk/e/fully-funded-cim-level-4-certificate-in-professional-and-digital-marketing-tickets-1994820188884', '2026-09-21 10:35:20.084624', false, true, 0, '2026-09-21 10:35:21.120366', '2026-09-21 10:35:21.120376'),
  (91, 'fully-funded-cim-level-4-certificate-in-professional-and-digital-marketing-1994831576946', 'Fully Funded CIM Level 4 Certificate in Professional and Digital Marketing', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded Chartered Institute of Marketing Level 4 in Professional and Digital Marketing with Marketing Executive Level 4

We are offering the CIM Level 4 Certificate in Professional and Digital Marketing as part of our Marketing Executive Level 4 Apprenticeship, and the CIM Level 6 Diploma in Professional and Digital Marketing as part of our Marketing Manager Level 6 Apprenticeship.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026
Duration

Marketing Executive Level 4 + CIM Certificate Level 4
12 months + 3 months EPA preparation

Marketing Manager Level 6 + CIM Diploma Level 6
17 months + 3 months EPA preparation

Combined Level 4 + Level 6 + Diploma Level 7 in Strategy and Leadership
Completed in approximately 2 years, with the Diploma Level 7 funded by Kent Business College.

Format:

Online delivery (2 hours a week)

Optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Marketing Executive Level 4 + CIM Certificate Level 4

Marketing Impact and Planning (16 weeks)

Social Media Management + Project Management (16 weeks)

MarTech – AI in Marketing (16 weeks)

Optional: Content Marketing, Search Engine Optimisation

Marketing Manager Level 6 + CIM Diploma Level 6

Strategy & Planning – Aligning marketing strategies with business goals (16 weeks)

Commercial Intelligence – Using financial & data insights (16 weeks)

Customer Journey Optimisation (16 weeks)

AI in Marketing (16 weeks)

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 21:00)

Optional UK networking workshops; travel covered

CIM graduation ceremony in London; rewards & prizes

Study Workload

8 hrs/week:

Live Online Classes: 2 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £450 total or £30/month for 15 months for Level 6 and 300 GBP for Level 4).
Kent Business College: CIM membership, exams, workshop travel, graduation extras — only for the first 10 learners per cohort.

Kent Business College Fund covers

CIM Membership, Registration & Exam Fees

Tutoring services (DfE funded)

Learning materials (DfE funded)

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

Private Health Care Insurance

Cost of travelling to attend our MasterClass events in London

Cost of attending our MasterClass Events in London

Diploma Level 7 in Strategy and Leadership — Saturday morning sessions, covered by Kent Business College, not the Department for Education, for eligible learners progressing through our Level 4 and Level 6 apprenticeship programmes.

No hidden costs

Eligibility

UK resident for the past 3 years

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Please note that places are limited, and many spaces may be fully booked before the event date.

Kent Business College, in partnership with the Department for Education, currently has only 20 fully funded places available for this opportunity. To avoid disappointment, we strongly encourage you to reserve your place as early as possible.

You are also welcome to book a meeting with one of our consultants at your earliest convenience to discuss the programme and secure your funded place before registrations close.

You can book it from this link information meeting.

We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186839805%2F45451189701%2F1%2Foriginal.20260613-212243?auto=format%2Ccompress&q=75&sharp=10&s=d62ee97f1e93659ff5727d8defe70542', '', '2026-08-20 12:00:00', '2026-08-20 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-cim-level-4-certificate-in-professional-and-digital-marketing-tickets-1994831576946', 'https://www.eventbrite.co.uk/e/fully-funded-cim-level-4-certificate-in-professional-and-digital-marketing-tickets-1994831576946', '2026-09-21 10:35:21.132454', true, true, 0, '2026-09-21 10:35:22.349005', '2026-09-21 10:35:22.349015'),
  (92, 'fully-funded-cim-diploma-level-6-in-professional-and-digital-marketing-1994843811540', 'Fully Funded CIM Diploma Level 6 in Professional and Digital Marketing', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded CIM Level 6 Diploma in Professional and Digital Marketing combined with Marketing Manager Level 6 Apprenticeship.

We are offering the CIM Level 6 Diploma in Professional and Digital Marketing as part of our Marketing Manager Level 6 Apprenticeship and the CIM Level 4 Certificate in Professional and Digital Marketing as part of our Marketing Executive Level 4 Apprenticeship.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026
Duration

Marketing Executive Level 4 + CIM Certificate Level 4
12 months + 3 months EPA preparation

Marketing Manager Level 6 + CIM Diploma Level 6
17 months + 3 months EPA preparation

Combined Level 4 + Level 6 + Diploma Level 7 in Strategy and Leadership
Completed in approximately 2 years, with the Diploma Level 7 funded by Kent Business College.

Format:

Online delivery (2 hours a week)

Optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Marketing Manager Level 6 + CIM Diploma Level 6

Strategy & Planning – Aligning marketing strategies with business goals (16 weeks)

Commercial Intelligence – Using financial & data insights (16 weeks)

Customer Journey Optimisation (16 weeks)

AI in Marketing (16 weeks)

Marketing Executive Level 4 + CIM Certificate Level 4

Marketing Impact and Planning (16 weeks)

Social Media Management + Project Management (16 weeks)

MarTech – AI in Marketing (16 weeks)

Optional: Content Marketing, Search Engine Optimisation

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 21:00)

Optional UK networking workshops; travel covered

CIM graduation ceremony in London; rewards & prizes

Study Workload

8 hrs/week:

Live Online Classes: 2 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £450 total or £30/month for 15 months for Level 6 and 300 GBP for Level 4).
Kent Business College: CIM membership, exams, workshop travel, graduation extras — only for the first 10 learners per cohort.

Kent Business College Fund covers

CIM Membership, Registration & Exam Fees

Tutoring services (DfE funded)

Learning materials (DfE funded)

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

Private Health Care Insurance

Cost of travelling to attend our London MasterClass events in London

Cost of attending our MasterClass Events in London

Diploma Level 7 in Strategy and Leadership — Saturday morning sessions, covered by Kent Business College, not the Department for Education, for eligible learners progressing through our Level 4 and Level 6 apprenticeship programmes.

No hidden costs

Eligibility

UK resident for the past 3 years

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Please note that places are limited, and many spaces may be fully booked before the event date.

Kent Business College, in partnership with the Department for Education, currently has only 40 fully funded places available for this opportunity. To avoid disappointment, we strongly encourage you to reserve your place as early as possible.

You are also welcome to book a meeting with one of our consultants at your earliest convenience to discuss the programme and secure your funded place before registrations close.

You can book it from this link information meeting.

We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186839805%2F45451189701%2F1%2Foriginal.20260613-212243?auto=format%2Ccompress&q=75&sharp=10&s=d62ee97f1e93659ff5727d8defe70542', '', '2026-08-21 12:00:00', '2026-08-21 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-cim-diploma-level-6-in-professional-and-digital-marketing-tickets-1994843811540', 'https://www.eventbrite.co.uk/e/fully-funded-cim-diploma-level-6-in-professional-and-digital-marketing-tickets-1994843811540', '2026-09-21 10:35:22.360463', true, true, 0, '2026-09-21 10:35:23.262193', '2026-09-21 10:35:23.262204'),
  (93, 'fully-funded-project-management-professional-with-ai-dashboards-and-agents-1991870612622', 'Fully Funded Project Management Professional with AI Dashboards and Agents', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'September Intake: Project Management Professional (PMP) Certificate with Practical Applications in AI Dashboards and AI Agents

We are pleased to invite you to join our fully funded Project Management Professional development programme, featuring practical applications in AI Agents and AI Dashboards.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026

Deadline: 8th September 2026
Schedule: Weekly
Duration: 12 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel costs covered)

Topics

Project Management Governance

Agile Project Management

Project Scope Management

Project Cost Management

Project Schedule Management

Project Quality Management

Project Risk Management

Project Communications, Stakeholder Engagements, and Reporting

Project Procurement

Project Leadership and Team Management

AI Dashboards Development and Design

AI Agents using N8N

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

All Qualifications and Exams costs are covered

Student Clubs Memberships (London, Kent, Manchester, Liverpool, and Birmingham)

Private Health Care Insurance for all learners

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

The total cost of the programme is £8,000, with £7,000 funded by the Department for Education and an additional £1,000 covered by the Kent Business College Fund.

Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £350 total or £35/month for 10 months). This fund includes tutoring services, learning materials, and an apprenticeship certificate.

Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility Criteria

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training at the time of this programme

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

If you are not eligible for apprenticeship funding

You may not be eligible for Department for Education apprenticeship funding if your employer is unable to support your apprenticeship, if you are self-employed, unemployed, or if you do not live and work in England.

However, you may still be eligible for support through the Kent Business College Fund and the Institute of Project Controls (IPC).

Unemployed, self-employed, or not supported by your employer:
You may be eligible for a 70% bursary, reducing the programme fee to £2,400. Payment can be spread over 20 months with no interest, at £120 per month.

Employed and funded directly by your employer:
Your employer may be eligible for a 50% bursary, reducing the programme fee to £4,000. Payment can be spread over 20 months with no interest, at £200 per month.

All bursaries are subject to acceptance by Kent Business College, and places are limited.

To check your eligibility, please book a meeting with one of our consultants or email: office@kentbusinesscollege.org

::: What''s Next - How to Join:::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information session. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org
Alice Saunders

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186878052%2F45451189701%2F1%2Foriginal.20260614-182224?auto=format%2Ccompress&q=75&sharp=10&s=f8689363adc72c5693f223d4d15ca5e4', '', '2026-08-25 12:00:00', '2026-08-25 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-management-professional-with-ai-dashboards-and-agents-tickets-1991870612622', 'https://www.eventbrite.co.uk/e/fully-funded-project-management-professional-with-ai-dashboards-and-agents-tickets-1991870612622', '2026-09-21 10:35:23.274523', true, true, 0, '2026-09-21 10:35:24.599056', '2026-09-21 10:35:24.599067'),
  (94, 'fully-funded-project-control-with-apm-chartered-project-professionalchpp-1991852879582', 'Fully Funded Project Control with  APM Chartered Project Professional(ChPP)', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded APM Chartered Project Professional(ChPP), PMP , Earned Value Management (APMG)  PMI-Schedule Professional

We’re pleased to invite you to join our fully funded Project Control Professional Level 6 programme, which includes five professional certificates and the prestigious Chartered Project Professional (ChPP) designation. More Details

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026

Deadline: 8th September 2026
Schedule: Weekly
Duration: 26 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel costs covered)

Operational Route - (Modules)

Project Management Professional (PMI - PMP) or APM PMQ

PMI Scheduling Professional (PMI - SP)

Cost Engineering & Earned Value Management (APMG)

Risk Management Level 1 & 2 (APM)

Project Planning & Control (APMG)

ChPP Preparation (post-EPA)

Strategic Route - (Modules)

Project Management Professional (PMP)

Management of Portfolios (APMG)

Managing Successful Programmes (Axelos)

Risk Management Level 1 & 2 (APM)

Project Management Office (PMI)

ChPP Preparation (post-EPA)

Chartered Pathway Association for Project Management recognised assessment route

This route is designed for learners whose priority is Chartered Project Professional technical-knowledge recognition through the Project Management Office Professional Level 6 route.

Certified Project Management Office Professional Level 6: Module 1 .Project Planning and Control

Certified Project Management Office Professional Level 6: Module 2 .Risk, Issue and Quality Management

Certified Project Management Office Professional Level 6: Module 3 .Stakeholder Engagement, Communications Management and Reporting Systems

Certified Project Management Office Professional Level 6: Module 3 .Stakeholder Engagement, Communications Management and Reporting Systems

Artificial Intelligence in Project Controls Certificate

Earned Value Management or Management of Portfolios

Certified Level 6 in Project Management Office (Accredited Assessment by APM for ChPP)

Project Management Office

Project Planning and Control

Risk, Issue, and Quality Management

Stakeholder, Communications, and Reporting Systems

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

ChPP costs are covered

All Qualifications and Exams costs are covered

Student Clubs Memberships (London, Kent, Manchester, Liverpool, and Birmingham)

Private Health Care Insurance for all learners

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £1,350 total or £45/month for 30 months). This fund includes tutoring services, learning materials, and an apprenticeship certificate.

Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility Criteria

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training at the time of this programme

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Join:::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information session. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org
Alice Saunders

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186839793%2F45451189701%2F1%2Foriginal.20260613-212214?auto=format%2Ccompress&q=75&sharp=10&s=ada06452de9dc8a56073e7ee54110cd9', '', '2026-09-14 12:00:00', '2026-09-14 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1991852879582', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1991852879582', '2026-09-21 10:35:26.110640', true, true, 0, '2026-09-21 10:35:27.225151', '2026-09-21 10:35:27.225160'),
  (95, 'last-call-for-september-upskill-your-team-with-dfe-and-kbc-funding-1991853080182', 'Last Call for September: Upskill Your Team with DfE and KBC Funding', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Limited September Places: Upskill Your Workforce with Department for Education Funding and the Kent Business College Fund

Looking for a funded programme that goes beyond training and delivers real professional recognition?

Established in 2016, Kent Business College is a leading UK provider of funded professional programmes for ambitious employees, middle managers and senior leaders.

We are proud to be published as number one in the UK for learner numbers, satisfaction and retention across our Marketing Level 4, Marketing Level 6 and Project Controls programmes.

Kent Business College offers a unique funded package, combining Department for Education apprenticeship funding with additional investment from the College. This includes access to professional qualifications from CIM, PMI, APM and APMG, as well as support towards the APM Chartered Project Professional pathway.

We also cover the cost of our London Masterclass Events, not only for learners, but also for employers, heads of training and apprenticeship leads.

Join this online event to discover our programmes, understand the funding, and ask your questions directly to our team.

Who This Event Is For

This event has been carefully designed for decision-makers and influencers responsible for workforce development, talent strategy, and organisational capability building, including:

Early Careers Managers

Talent Acquisition Directors and Managers

HR Business Partners

Learning & Development Managers

Heads of People and Organisational Development

Workforce Planning and Transformation Leads

If you are responsible for recruiting, developing, or retaining talent, this event will provide you with practical strategies and actionable insights you can take back into your organisation immediately.

Our Areas of Specialisation

Kent Business College is a leading provider of apprenticeship programmes, with particular strength in:

Marketing & Sales

Marketing Executive Level 4 (CIM Level 4 Certificate in Professional and Digital Marketing)

Marketing Manager Level 6 (CIM Level 6 Diploma in Professional and Digital Marketing)

Marketing Research Level 4 (Marketing Research Society Certificate)

Sales Executive Level 4

Project Management programmes

Project Technician Level 3 (APM/PFQ or CAPM, PMI - Schedule Professional, and AI Dashboards and AI Agents in Project Controls)

Associate Project Manager Level 4 (APM - PMQ, or PMI - PMP)

Project Control Professional Level 6 (APM - Chartered Professional Project (APM- ChPP), PMI - Project Management Professional, APMG- Earned Value Management and Project Planning and Control, PMI - Schedule Professional, PMI - Project Management Office, APMG - Managing Portfolios)

Our programmes are designed not only to meet apprenticeship standards, but to align with industry practices, professional body frameworks, and real organisational needs.

What is covered by the Kent Business College Fund?
These benefits are funded by Kent Business College and are separate from Department for Education apprenticeship funding.

Professional memberships, including CIM, PMI, APM, CaSA and the Institute of Project Controls.

Professional exam fees, including examples such as CIM Certificate Level 4, CIM Diploma Level 6, APM PMQ, APM PFQ, APM Risk Management, APMG Project Planning and Control, PMI PMP and PMI Scheduling Professional.

Attendance at professional London Masterclass Events at the Marble Arch Hotel, held three times a year.

Event support for apprentices, employers, line managers and heads of training, including transport support and open buffet lunch.

Private healthcare insurance during the programme.

Graduation ceremony at Rochester Cathedral to celebrate learner achievement.

Places for our September intake are limited.

The Kent Business College Fund is available on a limited basis and will be allocated on a first-come, first-served basis to eligible learners and employers.

To avoid missing out, we strongly recommend booking a one-to-one meeting with one of our programme experts before the event day. This will give you the opportunity to check eligibility, understand the funding package, explore the right programme route, and secure your next steps early. You can book a meeting with one of our experts from this link

Or contact Alice Saudners at office@kentbusinesscollege.org

Alice Saunders,

Kent Business College

nt Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186860416%2F45451189701%2F1%2Foriginal.20260614-090719?auto=format%2Ccompress&q=75&sharp=10&s=128bf9e793251350aaf1e03fe177bf71', '', '2026-09-15 12:00:00', '2026-09-15 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/last-call-for-september-upskill-your-team-with-dfe-and-kbc-funding-tickets-1991853080182', 'https://www.eventbrite.co.uk/e/last-call-for-september-upskill-your-team-with-dfe-and-kbc-funding-tickets-1991853080182', '2026-09-21 10:35:27.239151', true, true, 0, '2026-09-21 10:35:32.278171', '2026-09-21 10:35:32.278181'),
  (96, 'fully-funded-project-management-professional-with-ai-dashboards-and-agents-1995319995820', 'Fully Funded Project Management Professional with AI Dashboards and Agents', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'September Intake: Project Management Professional (PMP) Certificate with Practical Applications in AI Dashboards and AI Agents

We are pleased to invite you to join our fully funded Project Management Professional development programme, featuring practical applications in AI Agents and AI Dashboards.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026

Deadline: 8th September 2026
Schedule: Weekly
Duration: 12 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel costs covered)

Topics

Project Management Governance

Agile Project Management

Project Scope Management

Project Cost Management

Project Schedule Management

Project Quality Management

Project Risk Management

Project Communications, Stakeholder Engagements, and Reporting

Project Procurement

Project Leadership and Team Management

AI Dashboards Development and Design

AI Agents using N8N

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

All Qualifications and Exams costs are covered

Student Clubs Memberships (London, Kent, Manchester, Liverpool, and Birmingham)

Private Health Care Insurance for all learners

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

The total cost of the programme is £8,000, with £7,000 funded by the Department for Education and an additional £1,000 covered by the Kent Business College Fund.

Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £350 total or £35/month for 10 months). This fund includes tutoring services, learning materials, and an apprenticeship certificate.

Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility Criteria

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training at the time of this programme

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

If you are not eligible for apprenticeship funding

You may not be eligible for Department for Education apprenticeship funding if your employer is unable to support your apprenticeship, if you are self-employed, unemployed, or if you do not live and work in England.

However, you may still be eligible for support through the Kent Business College Fund and the Institute of Project Controls (IPC).

Unemployed, self-employed, or not supported by your employer:
You may be eligible for a 70% bursary, reducing the programme fee to £2,400. Payment can be spread over 20 months with no interest, at £120 per month.

Employed and funded directly by your employer:
Your employer may be eligible for a 50% bursary, reducing the programme fee to £4,000. Payment can be spread over 20 months with no interest, at £200 per month.

All bursaries are subject to acceptance by Kent Business College, and places are limited.

To check your eligibility, please book a meeting with one of our consultants or email: office@kentbusinesscollege.org

::: What''s Next - How to Join:::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information session. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org
Alice Saunders

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186840866%2F45451189701%2F1%2Foriginal.20260613-214940?auto=format%2Ccompress&q=75&sharp=10&s=1922a306b298d90f614a751d1a60a63e', '', '2026-09-17 12:00:00', '2026-09-17 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'completed', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-management-professional-with-ai-dashboards-and-agents-tickets-1995319995820', 'https://www.eventbrite.co.uk/e/fully-funded-project-management-professional-with-ai-dashboards-and-agents-tickets-1995319995820', '2026-09-21 10:35:32.290647', true, true, 0, '2026-09-21 10:35:33.292034', '2026-09-21 10:35:33.292043'),
  (97, 'fully-funded-project-management-professional-with-ai-dashboards-and-agents-1995317212495', 'Fully Funded Project Management Professional with AI Dashboards and Agents', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Project Management Professional (PMP) Certificate with Practical Applications in AI Dashboards and AI Agents

We are pleased to invite you to join our fully funded Project Management Professional development programme, featuring practical applications in AI Agents and AI Dashboards.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026

Deadline: 8th September 2026
Schedule: Weekly
Duration: 12 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel costs covered)

Topics

Project Management Governance

Agile Project Management

Project Scope Management

Project Cost Management

Project Schedule Management

Project Quality Management

Project Risk Management

Project Communications, Stakeholder Engagements, and Reporting

Project Procurement

Project Leadership and Team Management

AI Dashboards Development and Design

AI Agents using N8N

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

All Qualifications and Exams costs are covered

Student Clubs Memberships (London, Kent, Manchester, Liverpool, and Birmingham)

Private Health Care Insurance for all learners

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

The total cost of the programme is £8,000, with £7,000 funded by the Department for Education and an additional £1,000 covered by the Kent Business College Fund.

Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £350 total or £35/month for 10 months). This fund includes tutoring services, learning materials, and an apprenticeship certificate.

Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility Criteria

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training at the time of this programme

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

If you are not eligible for apprenticeship funding

You may not be eligible for Department for Education apprenticeship funding if your employer is unable to support your apprenticeship, if you are self-employed, unemployed, or if you do not live and work in England.

However, you may still be eligible for support through the Kent Business College Fund and the Institute of Project Controls (IPC).

Unemployed, self-employed, or not supported by your employer:
You may be eligible for a 70% bursary, reducing the programme fee to £2,400. Payment can be spread over 20 months with no interest, at £120 per month.

Employed and funded directly by your employer:
Your employer may be eligible for a 50% bursary, reducing the programme fee to £4,000. Payment can be spread over 20 months with no interest, at £200 per month.

All bursaries are subject to acceptance by Kent Business College, and places are limited.

To check your eligibility, please book a meeting with one of our consultants or email: office@kentbusinesscollege.org

::: What''s Next - How to Join:::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information session. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org
Alice Saunders

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186878052%2F45451189701%2F1%2Foriginal.20260614-182224?auto=format%2Ccompress&q=75&sharp=10&s=f8689363adc72c5693f223d4d15ca5e4', '', '2026-09-18 12:00:00', '2026-09-18 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'draft', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-management-professional-with-ai-dashboards-and-agents-tickets-1995317212495', 'https://www.eventbrite.co.uk/e/fully-funded-project-management-professional-with-ai-dashboards-and-agents-tickets-1995317212495', '2026-09-21 10:35:33.303283', false, true, 0, '2026-09-21 10:35:37.041038', '2026-09-21 10:35:37.041049'),
  (98, 'fully-funded-project-management-professional-with-ai-dashboards-and-agents-1995318961727', 'Fully Funded Project Management Professional with AI Dashboards and Agents', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'September Intake: Project Management Professional (PMP) Certificate with Practical Applications in AI Dashboards and AI Agents

We are pleased to invite you to join our fully funded Project Management Professional development programme, featuring practical applications in AI Agents and AI Dashboards.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026

Deadline: 8th September 2026
Schedule: Weekly
Duration: 12 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel costs covered)

Topics

Project Management Governance

Agile Project Management

Project Scope Management

Project Cost Management

Project Schedule Management

Project Quality Management

Project Risk Management

Project Communications, Stakeholder Engagements, and Reporting

Project Procurement

Project Leadership and Team Management

AI Dashboards Development and Design

AI Agents using N8N

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

All Qualifications and Exams costs are covered

Student Clubs Memberships (London, Kent, Manchester, Liverpool, and Birmingham)

Private Health Care Insurance for all learners

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

The total cost of the programme is £8,000, with £7,000 funded by the Department for Education and an additional £1,000 covered by the Kent Business College Fund.

Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £350 total or £35/month for 10 months). This fund includes tutoring services, learning materials, and an apprenticeship certificate.

Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility Criteria

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training at the time of this programme

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

If you are not eligible for apprenticeship funding

You may not be eligible for Department for Education apprenticeship funding if your employer is unable to support your apprenticeship, if you are self-employed, unemployed, or if you do not live and work in England.

However, you may still be eligible for support through the Kent Business College Fund and the Institute of Project Controls (IPC).

Unemployed, self-employed, or not supported by your employer:
You may be eligible for a 70% bursary, reducing the programme fee to £2,400. Payment can be spread over 20 months with no interest, at £120 per month.

Employed and funded directly by your employer:
Your employer may be eligible for a 50% bursary, reducing the programme fee to £4,000. Payment can be spread over 20 months with no interest, at £200 per month.

All bursaries are subject to acceptance by Kent Business College, and places are limited.

To check your eligibility, please book a meeting with one of our consultants or email: office@kentbusinesscollege.org

::: What''s Next - How to Join:::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information session. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org
Alice Saunders

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186878052%2F45451189701%2F1%2Foriginal.20260614-182224?auto=format%2Ccompress&q=75&sharp=10&s=f8689363adc72c5693f223d4d15ca5e4', '', '2026-09-18 12:00:00', '2026-09-18 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'draft', 'sold_out', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-management-professional-with-ai-dashboards-and-agents-tickets-1995318961727', 'https://www.eventbrite.co.uk/e/fully-funded-project-management-professional-with-ai-dashboards-and-agents-tickets-1995318961727', '2026-09-21 10:35:37.053476', false, true, 0, '2026-09-21 10:35:37.664034', '2026-09-21 10:35:37.664043'),
  (99, 'fully-funded-cim-level-4-certificate-in-professional-and-digital-marketing-1995320673848', 'Fully Funded CIM Level 4 Certificate in Professional and Digital Marketing', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded Chartered Institute of Marketing Level 4 in Professional and Digital Marketing with Marketing Executive Level 4

We are offering the CIM Level 4 Certificate in Professional and Digital Marketing as part of our Marketing Executive Level 4 Apprenticeship, and the CIM Level 6 Diploma in Professional and Digital Marketing as part of our Marketing Manager Level 6 Apprenticeship.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026
Duration

Marketing Executive Level 4 + CIM Certificate Level 4
12 months + 3 months EPA preparation

Marketing Manager Level 6 + CIM Diploma Level 6
17 months + 3 months EPA preparation

Combined Level 4 + Level 6 + Diploma Level 7 in Strategy and Leadership
Completed in approximately 2 years, with the Diploma Level 7 funded by Kent Business College.

Format:

Online delivery (2 hours a week)

Optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Marketing Executive Level 4 + CIM Certificate Level 4

Marketing Impact and Planning (16 weeks)

Social Media Management + Project Management (16 weeks)

MarTech – AI in Marketing (16 weeks)

Optional: Content Marketing, Search Engine Optimisation

Marketing Manager Level 6 + CIM Diploma Level 6

Strategy & Planning – Aligning marketing strategies with business goals (16 weeks)

Commercial Intelligence – Using financial & data insights (16 weeks)

Customer Journey Optimisation (16 weeks)

AI in Marketing (16 weeks)

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 21:00)

Optional UK networking workshops; travel covered

CIM graduation ceremony in London; rewards & prizes

Study Workload

8 hrs/week:

Live Online Classes: 2 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £450 total or £30/month for 15 months for Level 6 and 300 GBP for Level 4).
Kent Business College: CIM membership, exams, workshop travel, graduation extras — only for the first 10 learners per cohort.

Kent Business College Fund covers

CIM Membership, Registration & Exam Fees

Tutoring services (DfE funded)

Learning materials (DfE funded)

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

Private Health Care Insurance

Cost of travelling to attend our MasterClass events in London

Cost of attending our MasterClass Events in London

Diploma Level 7 in Strategy and Leadership — Saturday morning sessions, covered by Kent Business College, not the Department for Education, for eligible learners progressing through our Level 4 and Level 6 apprenticeship programmes.

No hidden costs

Eligibility

UK resident for the past 3 years

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Please note that places are limited, and many spaces may be fully booked before the event date.

Kent Business College, in partnership with the Department for Education, currently has only 20 fully funded places available for this opportunity. To avoid disappointment, we strongly encourage you to reserve your place as early as possible.

You are also welcome to book a meeting with one of our consultants at your earliest convenience to discuss the programme and secure your funded place before registrations close.

You can book it from this link information meeting.

We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186839805%2F45451189701%2F1%2Foriginal.20260613-212243?auto=format%2Ccompress&q=75&sharp=10&s=d62ee97f1e93659ff5727d8defe70542', '', '2026-09-24 12:00:00', '2026-09-24 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'live', 'available', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-cim-level-4-certificate-in-professional-and-digital-marketing-tickets-1995320673848', 'https://www.eventbrite.co.uk/e/fully-funded-cim-level-4-certificate-in-professional-and-digital-marketing-tickets-1995320673848', '2026-09-21 10:35:37.676117', true, true, 0, '2026-09-21 10:35:38.648385', '2026-09-21 10:35:38.648408'),
  (100, 'fully-funded-cim-diploma-level-6-in-professional-and-digital-marketing-1995324351849', 'Fully Funded CIM Diploma Level 6 in Professional and Digital Marketing', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded CIM Level 6 Diploma in Professional and Digital Marketing combined with Marketing Manager Level 6 Apprenticeship.

We are offering the CIM Level 6 Diploma in Professional and Digital Marketing as part of our Marketing Manager Level 6 Apprenticeship and the CIM Level 4 Certificate in Professional and Digital Marketing as part of our Marketing Executive Level 4 Apprenticeship.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026
Duration

Marketing Executive Level 4 + CIM Certificate Level 4
12 months + 3 months EPA preparation

Marketing Manager Level 6 + CIM Diploma Level 6
17 months + 3 months EPA preparation

Combined Level 4 + Level 6 + Diploma Level 7 in Strategy and Leadership
Completed in approximately 2 years, with the Diploma Level 7 funded by Kent Business College.

Format:

Online delivery (2 hours a week)

Optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Marketing Manager Level 6 + CIM Diploma Level 6

Strategy & Planning – Aligning marketing strategies with business goals (16 weeks)

Commercial Intelligence – Using financial & data insights (16 weeks)

Customer Journey Optimisation (16 weeks)

AI in Marketing (16 weeks)

Marketing Executive Level 4 + CIM Certificate Level 4

Marketing Impact and Planning (16 weeks)

Social Media Management + Project Management (16 weeks)

MarTech – AI in Marketing (16 weeks)

Optional: Content Marketing, Search Engine Optimisation

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 21:00)

Optional UK networking workshops; travel covered

CIM graduation ceremony in London; rewards & prizes

Study Workload

8 hrs/week:

Live Online Classes: 2 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £450 total or £30/month for 15 months for Level 6 and 300 GBP for Level 4).
Kent Business College: CIM membership, exams, workshop travel, graduation extras — only for the first 10 learners per cohort.

Kent Business College Fund covers

CIM Membership, Registration & Exam Fees

Tutoring services (DfE funded)

Learning materials (DfE funded)

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

Private Health Care Insurance

Cost of travelling to attend our London MasterClass events in London

Cost of attending our MasterClass Events in London

Diploma Level 7 in Strategy and Leadership — Saturday morning sessions, covered by Kent Business College, not the Department for Education, for eligible learners progressing through our Level 4 and Level 6 apprenticeship programmes.

No hidden costs

Eligibility

UK resident for the past 3 years

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Please note that places are limited, and many spaces may be fully booked before the event date.

Kent Business College, in partnership with the Department for Education, currently has only 40 fully funded places available for this opportunity. To avoid disappointment, we strongly encourage you to reserve your place as early as possible.

You are also welcome to book a meeting with one of our consultants at your earliest convenience to discuss the programme and secure your funded place before registrations close.

You can book it from this link information meeting.

We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186839805%2F45451189701%2F1%2Foriginal.20260613-212243?auto=format%2Ccompress&q=75&sharp=10&s=d62ee97f1e93659ff5727d8defe70542', '', '2026-09-28 12:00:00', '2026-09-28 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'live', 'available', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-cim-diploma-level-6-in-professional-and-digital-marketing-tickets-1995324351849', 'https://www.eventbrite.co.uk/e/fully-funded-cim-diploma-level-6-in-professional-and-digital-marketing-tickets-1995324351849', '2026-09-21 10:35:38.660702', true, true, 0, '2026-09-21 10:35:39.196239', '2026-09-21 10:35:39.196250'),
  (101, 'fully-funded-project-control-with-apm-chartered-project-professionalchpp-1995436082037', 'Fully Funded Project Control with  APM Chartered Project Professional(ChPP)', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded APM Chartered Project Professional(ChPP), PMP , Earned Value Management (APMG)  PMI-Schedule Professional

We’re pleased to invite you to join our fully funded Project Control Professional Level 6 programme, which includes five professional certificates and the prestigious Chartered Project Professional (ChPP) designation. More Details

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: January 2026

Deadline: 10th January 2026
Schedule: Weekly
Duration: 26 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel costs covered)

Operational Route - (Modules)

Project Management Professional (PMI - PMP) or APM PMQ

PMI Scheduling Professional (PMI - SP)

Cost Engineering & Earned Value Management (APMG)

Risk Management Level 1 & 2 (APM)

Project Planning & Control (APMG)

ChPP Preparation (post-EPA)

Strategic Route - (Modules)

Project Management Professional (PMP)

Management of Portfolios (APMG)

Managing Successful Programmes (Axelos)

Risk Management Level 1 & 2 (APM)

Project Management Office (PMI)

ChPP Preparation (post-EPA)

Strategic Operational Route - (Modules - Diploma Level 7 in Project Management - No Exams)

Project Management Professional (PMP)

Planning, Controlling and Leading a Project (30 credits)

Procurement Risk and Contract Management (30 credits)

Advanced Project and Logistics Management (20 credits)

Operations and Information Management for Project Managers (20 credits)

Advanced Research Methods

Certified Level 6 in Project Management Office (Accredited Assessment by APM for ChPP)

Project Management Office

Project Planning and Control

Risk, Issue, and Quality Management

Stakeholder, Communications, and Reporting Systems

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

ChPP costs are covered

All Qualifications and Exams costs are covered

Student Clubs Memberships (London, Kent, Manchester, Liverpool, and Birmingham)

Private Health Care Insurance for all learners

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £1,350 total or £45/month for 30 months). This fund includes tutoring services, learning materials, and an apprenticeship certificate.

Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility Criteria

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training at the time of this programme

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Join:::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information session. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org
Alice Saunders

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1189683090%2F45451189701%2F1%2Foriginal.20260727-084207?auto=format%2Ccompress&q=75&sharp=10&s=e5b302e0fa4025bfcb7b2c64401d373f', '', '2026-10-01 12:00:00', '2026-10-01 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'draft', 'available', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1995436082037', 'https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1995436082037', '2026-09-21 10:35:39.209163', false, true, 0, '2026-09-21 10:35:39.771154', '2026-09-21 10:35:39.771164'),
  (102, 'the-london-masterclass-1996611333245', 'The London Masterclass', '', 'eventbrite', NULL, 'in_person', '', '', 'Join us at The London Masterclass for hands-on tips and insider secrets from top pros!

Join The London Masterclass!

Get ready for an amazing in-person experience right in the heart of London. This is your chance to dive deep, learn new skills, and connect with awesome people who share your passion. Whether you''re looking to boost your knowledge or just have a great time, The London Masterclass has got you covered. Don’t miss out on this unique opportunity - we can''t wait to see you there!

Kent Business College invites external employers, business leaders and working professionals to attend The London Masterclass 2026, taking place on Friday 2 October 2026 at The Cumberland, Marble Arch, London.

This in-person event brings together employers, managers, practitioners, learners, tutors, speakers and professional partners for a day of professional learning, industry insight, learner recognition and meaningful networking.

The event will feature two professional streams:

Project Management
Covering themes connected with project delivery, project controls, planning, risk, governance, leadership and organisational performance.

Marketing
Covering themes connected with marketing strategy, digital marketing, communications, customer insight, leadership and business impact.

Delegates will have opportunities to hear from experienced speakers, exchange ideas with peers, meet relevant exhibitors and partners, and explore practical approaches to developing people and organisational capability.

Attendees will have the opportunity to:

Gain practical insight from experienced speakers and industry professionals.

Explore current challenges affecting marketing, projects and organisational performance.

Exchange ideas with employers, managers and professional peers.

Build connections across different sectors and professional disciplines.

Discuss workforce-development and professional-learning opportunities.

Meet Kent Business College representatives, sponsors and exhibitors.

Celebrate learner achievement and professional progression.

Participate in a high-quality, in-person professional event in central London.

The delegate ticket includes:

Full-day admission to The London Masterclass.

Access to available Project Management and Marketing sessions.

Professional and employer networking.

Entry to the sponsor and exhibition areas.

Access to the learner certificate ceremony.

Premium hot and cold lunch buffet.

Tea, coffee, water, soft drinks and refreshments.

Selected event materials and professional resources.

Opportunities to meet Kent Business College representatives and event partners.

Ticket Setup:

£50 total per person

up to six delegate tickets per order and require individual attendee information for every ticket.

For bookings of more than six delegates, please contact the Kent Business College Events Team before placing your order.

Registrations may close earlier if the event reaches its confirmed venue capacity.

Recommended Public Policy

- Refund requests may be submitted up to 09:00 on Friday 25 September 2026, seven days before the event.

- Approved refunds will be returned to the original payment method.

- After the refund deadline, a ticket may be transferred to another eligible colleague at no additional cost. Transfer requests must be sent to events@kentbusinesscollege.com by 12:00 on Wednesday 30 September 2026.

- If Kent Business College cancels the event, registered delegates will receive a full refund of the amount paid, including compulsory ticketing fees.

- If the event is postponed, registered delegates will be contacted in writing with the revised information and the options available to them.

- Kent Business College is not responsible for independently booked travel, accommodation or other associated costs.

- Kent Business College is committed to providing an inclusive and accessible event.

- Please tell us about any access requirements when completing your registration. This may include mobility access, seating arrangements, hearing or visual support, communication requirements, accessible event information or other reasonable adjustments.

- Early notice helps us coordinate arrangements with the venue; however, requests made after the registration deadline will still be considered.

- Please provide details of any food allergies, intolerances or dietary requirements during registration.

- Kent Business College will share relevant information with the venue and catering team for the purpose of preparing for your attendance.

- Attendees with serious or complex allergies are encouraged to contact the Events Team before the event and to speak directly with the catering team on arrival.

- Please note that dietary requests submitted after Friday 25 September 2026 may be more difficult to accommodate, although reasonable efforts will still be made.

- Photography, video recording and audio recording will take place during The London Masterclass.

- Selected photographs and recordings may be used by Kent Business College for event reporting, educational communications, social media, marketing and promotion of future professional events.

- If you would prefer not to appear in identifiable photography or video, please tell us during registration or contact the Events Team before the event. You may also speak to a member of staff at the registration desk, where the available opt-out arrangements will be explained.', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1190265053%2F45451189701%2F1%2Foriginal.20260804-084224?auto=format%2Ccompress&q=75&sharp=10&s=4004e9749ef94f61bae7a324f0c22405', '', '2026-10-02 08:00:00', '2026-10-02 16:00:00', 'Europe/London', 'The Cumberland Hotel, London, Marble Arch, London, W1H 7DL', 'Kent Business College', 'draft', 'available', '50.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/the-london-masterclass-tickets-1996611333245', 'https://www.eventbrite.co.uk/e/the-london-masterclass-tickets-1996611333245', '2026-09-21 10:35:39.785874', false, true, 0, '2026-09-21 10:35:40.317205', '2026-09-21 10:35:40.317215'),
  (103, 'fully-funded-project-management-professional-with-ai-dashboards-and-agents-1995440252511', 'Fully Funded Project Management Professional with AI Dashboards and Agents', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'September Intake: Project Management Professional (PMP) Certificate with Practical Applications in AI Dashboards and AI Agents

We are pleased to invite you to join our fully funded Project Management Professional development programme, featuring practical applications in AI Agents and AI Dashboards.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: January 2026

Deadline: 10th January 2026
Schedule: Weekly
Duration: 12 months + EPA preparation period
Format: Online delivery + optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel costs covered)

Topics

Project Management Governance

Agile Project Management

Project Scope Management

Project Cost Management

Project Schedule Management

Project Quality Management

Project Risk Management

Project Communications, Stakeholder Engagements, and Reporting

Project Procurement

Project Leadership and Team Management

AI Dashboards Development and Design

AI Agents using N8N

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 9:00 PM)

Optional UK networking workshops; travel covered

Graduation ceremony at Rochester Cathedral (Kent)

All Qualifications and Exams costs are covered

Student Clubs Memberships (London, Kent, Manchester, Liverpool, and Birmingham)

Private Health Care Insurance for all learners

Study Workload

8.5 hrs/week (during paid working hours):

Classes: 2.5 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

The total cost of the programme is £8,000, with £7,000 funded by the Department for Education and an additional £1,000 covered by the Kent Business College Fund.

Department for Education Fund: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £350 total or £35/month for 10 months). This fund includes tutoring services, learning materials, and an apprenticeship certificate.

Kent Business College Fund (Not Covered by DfE): Covers professional exam fees, memberships, APM ChPP application & preparation, and ICostE / Certified Professional Cost Engineer pathways, limited to the first 10 learners per cohort. This fund includes:

Membership, registration & exam fees

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

No hidden costs

Eligibility Criteria

UK resident for the past 3 years

Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)

Not enrolled in other government-funded training at the time of this programme

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

If you are not eligible for apprenticeship funding

You may not be eligible for Department for Education apprenticeship funding if your employer is unable to support your apprenticeship, if you are self-employed, unemployed, or if you do not live and work in England.

However, you may still be eligible for support through the Kent Business College Fund and the Institute of Project Controls (IPC).

Unemployed, self-employed, or not supported by your employer:
You may be eligible for a 70% bursary, reducing the programme fee to £2,400. Payment can be spread over 20 months with no interest, at £120 per month.

Employed and funded directly by your employer:
Your employer may be eligible for a 50% bursary, reducing the programme fee to £4,000. Payment can be spread over 20 months with no interest, at £200 per month.

All bursaries are subject to acceptance by Kent Business College, and places are limited.

To check your eligibility, please book a meeting with one of our consultants or email: office@kentbusinesscollege.org

::: What''s Next - How to Join:::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Note: Spaces are limited and allocated strictly on a first-come, first-served basis. If you have any questions, please book an information session. We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org
Alice Saunders

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186878052%2F45451189701%2F1%2Foriginal.20260614-182224?auto=format%2Ccompress&q=75&sharp=10&s=f8689363adc72c5693f223d4d15ca5e4', '', '2026-10-06 12:00:00', '2026-10-06 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'draft', 'available', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-project-management-professional-with-ai-dashboards-and-agents-tickets-1995440252511', 'https://www.eventbrite.co.uk/e/fully-funded-project-management-professional-with-ai-dashboards-and-agents-tickets-1995440252511', '2026-09-21 10:35:40.330280', false, true, 0, '2026-09-21 10:35:41.738595', '2026-09-21 10:35:41.738606'),
  (104, 'upskill-your-team-with-dfe-and-kbc-funding-1995440488216', 'Upskill Your Team with DfE and KBC Funding', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Upskill Your Workforce with Department for Education Funding and the Kent Business College Fund

Looking for a funded programme that goes beyond training and delivers real professional recognition?

Established in 2016, Kent Business College is a leading UK provider of funded professional programmes for ambitious employees, middle managers and senior leaders.

We are proud to be published as number one in the UK for learner numbers, satisfaction and retention across our Marketing Level 4, Marketing Level 6 and Project Controls programmes.

Kent Business College offers a unique funded package, combining Department for Education apprenticeship funding with additional investment from the College. This includes access to professional qualifications from CIM, PMI, APM and APMG, as well as support towards the APM Chartered Project Professional pathway.

We also cover the cost of our London Masterclass Events, not only for learners, but also for employers, heads of training and apprenticeship leads.

Join this online event to discover our programmes, understand the funding, and ask your questions directly to our team.

Who This Event Is For

This event has been carefully designed for decision-makers and influencers responsible for workforce development, talent strategy, and organisational capability building, including:

Early Careers Managers

Talent Acquisition Directors and Managers

HR Business Partners

Learning & Development Managers

Heads of People and Organisational Development

Workforce Planning and Transformation Leads

If you are responsible for recruiting, developing, or retaining talent, this event will provide you with practical strategies and actionable insights you can take back into your organisation immediately.

Our Areas of Specialisation

Kent Business College is a leading provider of apprenticeship programmes, with particular strength in:

Marketing & Sales

Marketing Executive Level 4 (CIM Level 4 Certificate in Professional and Digital Marketing)

Marketing Manager Level 6 (CIM Level 6 Diploma in Professional and Digital Marketing)

Marketing Research Level 4 (Marketing Research Society Certificate)

Sales Executive Level 4

Project Management programmes

Project Technician Level 3 (APM/PFQ or CAPM, PMI - Schedule Professional, and AI Dashboards and AI Agents in Project Controls)

Associate Project Manager Level 4 (APM - PMQ, or PMI - PMP)

Project Control Professional Level 6 (APM - Chartered Professional Project (APM- ChPP), PMI - Project Management Professional, APMG- Earned Value Management and Project Planning and Control, PMI - Schedule Professional, PMI - Project Management Office, APMG - Managing Portfolios)

Our programmes are designed not only to meet apprenticeship standards, but to align with industry practices, professional body frameworks, and real organisational needs.

What is covered by the Kent Business College Fund?
These benefits are funded by Kent Business College and are separate from Department for Education apprenticeship funding.

Professional memberships, including CIM, PMI, APM, CaSA and the Institute of Project Controls.

Professional exam fees, including examples such as CIM Certificate Level 4, CIM Diploma Level 6, APM PMQ, APM PFQ, APM Risk Management, APMG Project Planning and Control, PMI PMP and PMI Scheduling Professional.

Attendance at professional London Masterclass Events at the Marble Arch Hotel, held three times a year.

Event support for apprentices, employers, line managers and heads of training, including transport support and open buffet lunch.

Private healthcare insurance during the programme.

Graduation ceremony at Rochester Cathedral to celebrate learner achievement.

Places for our September intake are limited.

The Kent Business College Fund is available on a limited basis and will be allocated on a first-come, first-served basis to eligible learners and employers.

To avoid missing out, we strongly recommend booking a one-to-one meeting with one of our programme experts before the event day. This will give you the opportunity to check eligibility, understand the funding package, explore the right programme route, and secure your next steps early. You can book a meeting with one of our experts from this link

Or contact Alice Saudners at office@kentbusinesscollege.org

Alice Saunders,

Kent Business College

nt Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186860416%2F45451189701%2F1%2Foriginal.20260614-090719?auto=format%2Ccompress&q=75&sharp=10&s=128bf9e793251350aaf1e03fe177bf71', '', '2026-10-13 12:00:00', '2026-10-13 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'draft', 'available', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/upskill-your-team-with-dfe-and-kbc-funding-tickets-1995440488216', 'https://www.eventbrite.co.uk/e/upskill-your-team-with-dfe-and-kbc-funding-tickets-1995440488216', '2026-09-21 10:35:41.750867', false, true, 0, '2026-09-21 10:35:42.386253', '2026-09-21 10:35:42.386264'),
  (105, 'fully-funded-cim-level-4-certificate-in-professional-and-digital-marketing-1995440579489', 'Fully Funded CIM Level 4 Certificate in Professional and Digital Marketing', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded Chartered Institute of Marketing Level 4 in Professional and Digital Marketing with Marketing Executive Level 4

We are offering the CIM Level 4 Certificate in Professional and Digital Marketing as part of our Marketing Executive Level 4 Apprenticeship, and the CIM Level 6 Diploma in Professional and Digital Marketing as part of our Marketing Manager Level 6 Apprenticeship.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026
Duration

Marketing Executive Level 4 + CIM Certificate Level 4
12 months + 3 months EPA preparation

Marketing Manager Level 6 + CIM Diploma Level 6
17 months + 3 months EPA preparation

Combined Level 4 + Level 6 + Diploma Level 7 in Strategy and Leadership
Completed in approximately 2 years, with the Diploma Level 7 funded by Kent Business College.

Format:

Online delivery (2 hours a week)

Optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Marketing Executive Level 4 + CIM Certificate Level 4

Marketing Impact and Planning (16 weeks)

Social Media Management + Project Management (16 weeks)

MarTech – AI in Marketing (16 weeks)

Optional: Content Marketing, Search Engine Optimisation

Marketing Manager Level 6 + CIM Diploma Level 6

Strategy & Planning – Aligning marketing strategies with business goals (16 weeks)

Commercial Intelligence – Using financial & data insights (16 weeks)

Customer Journey Optimisation (16 weeks)

AI in Marketing (16 weeks)

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 21:00)

Optional UK networking workshops; travel covered

CIM graduation ceremony in London; rewards & prizes

Study Workload

8 hrs/week:

Live Online Classes: 2 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £450 total or £30/month for 15 months for Level 6 and 300 GBP for Level 4).
Kent Business College: CIM membership, exams, workshop travel, graduation extras — only for the first 10 learners per cohort.

Kent Business College Fund covers

CIM Membership, Registration & Exam Fees

Tutoring services (DfE funded)

Learning materials (DfE funded)

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

Private Health Care Insurance

Cost of travelling to attend our MasterClass events in London

Cost of attending our MasterClass Events in London

Diploma Level 7 in Strategy and Leadership — Saturday morning sessions, covered by Kent Business College, not the Department for Education, for eligible learners progressing through our Level 4 and Level 6 apprenticeship programmes.

No hidden costs

Eligibility

UK resident for the past 3 years

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Please note that places are limited, and many spaces may be fully booked before the event date.

Kent Business College, in partnership with the Department for Education, currently has only 20 fully funded places available for this opportunity. To avoid disappointment, we strongly encourage you to reserve your place as early as possible.

You are also welcome to book a meeting with one of our consultants at your earliest convenience to discuss the programme and secure your funded place before registrations close.

You can book it from this link information meeting.

We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186839805%2F45451189701%2F1%2Foriginal.20260613-212243?auto=format%2Ccompress&q=75&sharp=10&s=d62ee97f1e93659ff5727d8defe70542', '', '2026-10-22 12:00:00', '2026-10-22 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'draft', 'available', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-cim-level-4-certificate-in-professional-and-digital-marketing-tickets-1995440579489', 'https://www.eventbrite.co.uk/e/fully-funded-cim-level-4-certificate-in-professional-and-digital-marketing-tickets-1995440579489', '2026-09-21 10:35:42.398981', false, true, 0, '2026-09-21 10:35:43.003757', '2026-09-21 10:35:43.003768'),
  (106, 'fully-funded-cim-diploma-level-6-in-professional-and-digital-marketing-1995440659729', 'Fully Funded CIM Diploma Level 6 in Professional and Digital Marketing', 'Business & Professional', 'eventbrite', 7, 'online', '', '', 'Fully Funded CIM Level 6 Diploma in Professional and Digital Marketing combined with Marketing Manager Level 6 Apprenticeship.

We are offering the CIM Level 6 Diploma in Professional and Digital Marketing as part of our Marketing Manager Level 6 Apprenticeship and the CIM Level 4 Certificate in Professional and Digital Marketing as part of our Marketing Executive Level 4 Apprenticeship.

"Apprenticeships in the UK are not limited by age, job title, or income level. They involve learning while working, gaining practical skills and knowledge on the job, regardless of one''s background or current position."

Key Details

Intake Admission Start: September 2026
Duration

Marketing Executive Level 4 + CIM Certificate Level 4
12 months + 3 months EPA preparation

Marketing Manager Level 6 + CIM Diploma Level 6
17 months + 3 months EPA preparation

Combined Level 4 + Level 6 + Diploma Level 7 in Strategy and Leadership
Completed in approximately 2 years, with the Diploma Level 7 funded by Kent Business College.

Format:

Online delivery (2 hours a week)

Optional in-person workshops (London, Kent, Nottingham, Derby, Birmingham, York, Manchester; travel covered)

Modules

Marketing Manager Level 6 + CIM Diploma Level 6

Strategy & Planning – Aligning marketing strategies with business goals (16 weeks)

Commercial Intelligence – Using financial & data insights (16 weeks)

Customer Journey Optimisation (16 weeks)

AI in Marketing (16 weeks)

Marketing Executive Level 4 + CIM Certificate Level 4

Marketing Impact and Planning (16 weeks)

Social Media Management + Project Management (16 weeks)

MarTech – AI in Marketing (16 weeks)

Optional: Content Marketing, Search Engine Optimisation

Programme Highlights

Live interactive lessons with recordings after every session

Free one-to-one tutoring (7 days a week, until 21:00)

Optional UK networking workshops; travel covered

CIM graduation ceremony in London; rewards & prizes

Study Workload

8 hrs/week:

Live Online Classes: 2 hrs/week (recordings available; catch-ups provided)

Reading & Quizzes: 3 hrs/week

Reflective Reports: 3 hrs/week (workplace application)

Funding & What’s Included

Department for Education: Apprenticeship tuition (100% for levy payers; 95% for non-levy with 5% employer contribution – £450 total or £30/month for 15 months for Level 6 and 300 GBP for Level 4).
Kent Business College: CIM membership, exams, workshop travel, graduation extras — only for the first 10 learners per cohort.

Kent Business College Fund covers

CIM Membership, Registration & Exam Fees

Tutoring services (DfE funded)

Learning materials (DfE funded)

Workshop travel

Graduation ceremony & rewards (incl. laptop prize)

Private Health Care Insurance

Cost of travelling to attend our London MasterClass events in London

Cost of attending our MasterClass Events in London

Diploma Level 7 in Strategy and Leadership — Saturday morning sessions, covered by Kent Business College, not the Department for Education, for eligible learners progressing through our Level 4 and Level 6 apprenticeship programmes.

No hidden costs

Eligibility

UK resident for the past 3 years

Not enrolled in other government-funded training

Self-employed individuals are not eligible for DfE funding

Paid employment in England (normally 30+ hrs/week; minimum 16)

Employer based in England and registered with the Apprenticeship Service

Spend at least 50% of their working hours within England

::: What''s Next - How to Enroll :::

Sign the Digital Contract: As an employer, please carefully review the entire contract and sign it using the following link: Sign the Agreement.

Add Us to the Apprenticeship Digital Account Service (DAS): Log in to your Government Apprenticeship DAS account Government Apprenticeship DAS - If your employer does not have an account, you only need the Government Gateway credentials (username and password) to create an account. Once created, add us as your provider using our UKPRN: 10093689. Watch here

Once you finish these steps, we will send you the next step to continue your application.

Please note that places are limited, and many spaces may be fully booked before the event date.

Kent Business College, in partnership with the Department for Education, currently has only 40 fully funded places available for this opportunity. To avoid disappointment, we strongly encourage you to reserve your place as early as possible.

You are also welcome to book a meeting with one of our consultants at your earliest convenience to discuss the programme and secure your funded place before registrations close.

You can book it from this link information meeting.

We’re here to help you every step of the way.

Contact us: office@kentbusinesscollege.org

Kent Business College - LinkedIn - YouTube - TikTok', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1186839805%2F45451189701%2F1%2Foriginal.20260613-212243?auto=format%2Ccompress&q=75&sharp=10&s=d62ee97f1e93659ff5727d8defe70542', '', '2026-10-23 12:00:00', '2026-10-23 14:00:00', 'Europe/London', 'Online', 'Kent Business College', 'draft', 'available', '0.00 GBP', false, '', 'Register on Eventbrite', 'https://www.eventbrite.co.uk/e/fully-funded-cim-diploma-level-6-in-professional-and-digital-marketing-tickets-1995440659729', 'https://www.eventbrite.co.uk/e/fully-funded-cim-diploma-level-6-in-professional-and-digital-marketing-tickets-1995440659729', '2026-09-21 10:35:43.019258', false, true, 0, '2026-09-21 10:35:43.593809', '2026-09-21 10:35:43.593819')
on conflict (id) do update set slug = excluded.slug, title = excluded.title, category = excluded.category, source = excluded.source, source_category_id = excluded.source_category_id, format = excluded.format, cadence = excluded.cadence, summary = excluded.summary, description = excluded.description, image_url = excluded.image_url, image_alt = excluded.image_alt, starts_at = excluded.starts_at, ends_at = excluded.ends_at, timezone = excluded.timezone, location = excluded.location, organizer = excluded.organizer, remote_status = excluded.remote_status, sales_status = excluded.sales_status, price_label = excluded.price_label, is_featured = excluded.is_featured, highlights_url = excluded.highlights_url, cta_label = excluded.cta_label, cta_href = excluded.cta_href, source_url = excluded.source_url, last_synced_at = excluded.last_synced_at, source_is_public = excluded.source_is_public, is_active = excluded.is_active, "order" = excluded."order", created_at = excluded.created_at, updated_at = excluded.updated_at;

-- event_classifications: no rows

select setval(pg_get_serial_sequence('public.articles', 'id'), coalesce((select max(id) from public.articles), 1), true);
select setval(pg_get_serial_sequence('public.case_studies', 'id'), coalesce((select max(id) from public.case_studies), 1), true);
select setval(pg_get_serial_sequence('public.testimonials', 'id'), coalesce((select max(id) from public.testimonials), 1), true);
select setval(pg_get_serial_sequence('public.event_categories', 'id'), coalesce((select max(id) from public.event_categories), 1), true);
select setval(pg_get_serial_sequence('public.events', 'id'), coalesce((select max(id) from public.events), 1), true);
select setval(pg_get_serial_sequence('public.event_classifications', 'id'), coalesce((select max(id) from public.event_classifications), 1), true);

commit;
