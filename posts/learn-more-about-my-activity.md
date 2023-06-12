---
title: My activity
date: "2023-02-21"
image: my-skills.jpg
excerpt: Here you can read more about my most notable achievements and projects.
isFeatured: true
---

# Certificates

## Next.js & React course by Maximillian Schwarzmuller

In this Udemy course I learned everything about Next.js and how to develop full-stack applications using this amazing framework built on top of React.

[Next.js Certificate](/downloads/certificates/NextJSCert.pdf)

# Work experience

## Elision (January 2023 (2 weeks))

This was a first proper working experience as part of an IT e-commerce solutions providing organization and the big project I had to do on my senior year at Thomas More (Project 4.0). This was Elision of the Cronos Groep for whom we had to provide an e-commerce application in 2 weeks of realization precedented by 2 weeks of research and learning the never-before-seen-by-me-and-my-team technologies.

I was responsible for fetching the data in our headless CMS (Contentful), breaking our listings down into categories and then listing products per each category, and indexing it in Algolia to then implement a search bar using Algolia's AI for product search.

The idea was not only to get us out of our comfort zone as students but to also bring Cloud & Cybersecurity, Application Development and Artificial Intelligence together in one team to simulate the real dynamic of an IT work landscape.

We ultimately got a webshop in Next.js up and running with all of the functionalities required for our proof of concept. The user was able to browse products by category, search for the products using Algolia, see the product details and order a product. The styling was in the end serviceable for a basic webshop UX.

You can watch a demo/promo of this project [here](https://youtu.be/TnUKmzZM1Qc).

Below you will find the full documentation of the project.

[Project documentation](/downloads/activity/ProjectHandover.docx)

## European Research Executive Agency (REA) & Executive Research Council Executive Agency (ERCEA) (January 2016 (1 week in each))

During my time at REA, I was tasked with the development of an application whereby a calendar was available with the possibility to create events which the user got reminded about. I was supposed to do this full-stack with the most basic languages available to me (HTML, CSS, JavaScript and PHP).

During my time at ERCEA, me and a classmate were tasked with the tracking of an organisation's progress with scientific research funded by the European Commission. We were given company names and we had to gather evidence to then support whether or not these companies were actually breaking ground or not in their research.

## Erasmus Student Network Geel - Event & communication team (since September 2022)

In September of 2022 I joined ESN Geel in order to take part in organizing and organise events for international students. In here I helped out with organizing fun events for students as well as organised my own event.

I took the helm on organising a charity event whereby students could donate everyday items such as shaving cream, toothpaste, clothes, blankets etc. to 2 organisations in Brussels. Sister House is an organisation sheltering mostly victims of domestic abuse, and Humanitarian Hub is a partner of the Red Cross, helping asylum seekers to get by in their fresh start.

As far as this notable event is concerned, we managed to raise quite a couple of everyday items to donate to these 2 charities over in Brussels.

![ESN certificate](esn-certificate.jpeg)

# Thomas More - Applied Computer Science: notable projects

## Z15810 - Artificial Intelligence project

## Deep Learning - Image Classification project

This was a project that was done while studying AI in the Thomas More University of Applied Sciences on my 3rd year. The problem at hand was to get a computer vision model to identify images of certain car makes and models based on a data set of images.

The approach taken was to scrape all of the images for the dataset from the web. After the scraper collected the necessary data, it would be split into training, validation and test sets for each image category.

Then a pre-trained resnet50 network was trained using the training set of each category after which a validation set was taken away to assess the performance of the model and a test set was used in order to have the model predict what some images represented.

Here is the confusion matrix of the model:

![confusion matrix DL](confusion-matrixDL.PNG)

Find out more about the step-by-step process here:

[Colab notebook](https://drive.google.com/file/d/1bCT2YO4Z4sS8BvywYXM3HbVcnu8y9SgO/view?usp=sharing)

## Machine Learning - Benchmarking 2 Machine Learning algorithms

This was another project done while studying AI. In this case a comparison was made between 3 different Machine Learning algorithms based on a dataset about cars and their properties. Data was taken from a set based on a csv file.

After this, the data about the cars was split into a training and a test set, based on which the Lasso and Ridge regressions were tested. Linear regression served as a baseline for the benchmark.

Predictions were made on the gas mileage of the cars based on their engine displacement. In the end, the root mean squared error was taken for each regression model as a whole in order to see which of the Lasso and the Ridge regression algorithms was better.

The result was that the Ridge regression was overall better as its RMSE was closer to that of the Linear regression test.

[Colab notebook](https://colab.research.google.com/drive/11MgZ2MY94dPDzkF_JJ4gYF-36DE4DDg5?usp=sharing)

## Z13992 - Enterprise Content Services

## Providing a SharePoint enterprise site for Frixion

This was a project where me and some classmates have worked together to provide a solution in Microsoft's SharePoint for Frixion, a belgian IT company, to have better means for business processes such as communication among the staff or with customers.

My job here was to provide the user with a way to automatically generate a sharepoint space for a project whenever a new one was introduced in the SharePoint site in the overall list of projects. The final result was exactly what was needed: a document library, a file storage as well as the people involved in the project (users within the Sharepoint site including the customer).

![Sharepoint project site](project-site-SP.png)

We ultimately got a very basic SharePoint site up and running with a very basic layout which ultimately conformed to most of the requirements given to us by Frixion.

[Project documentation](/downloads/classProjects/EnterpriseContentServicesProject.docx)
