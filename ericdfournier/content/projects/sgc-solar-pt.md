---
title: "Community Solar Prioritization Tool"
date: 2020-03-16T08:45:02-07:00
draft: false
---

# Status 

Completed

# Background

The culimation of this project was the development of what we call the Community Solar Opportunities Mapping (CSOM) tool. This tool is designed to help users identify and prioritize sites for community scale solar generation facilities. CCSC's development team partnered with several local Community Based Organizations (CBOs) who represent the interests of the intended user base of the tool. Interactions with these CBOs were organized into a series of workshops which focused initially on energy system education, then moved onto planning and scoping objectives for the development of the new tool, and finally, concluded with solicitation of feedback on features of the new tool’s prototype and final design stages.

Based upon the CBO’s feedback, which was obtained during the project’s various stakeholder workshops, it was jointly determined that the new tool should focus on the identification of sites that could host solar PV for the purposes of a Resilience Center or Community Solar system. Resilience Centers provide a place of refuge and support for the community during emergencies such as heat waves, wildfires, or earthquakes. Also called “Resilience Hubs,” these sites have solar PV and battery storage with islanding capabilities to provide power during grid outages. 

Community Solar installations generate clean energy to supply the needs of renters and other households that cannot install on-site solar due to inadequate roof strength, shading, or other reasons. Households participating in Community Solar projects enroll through  virtual net energy metering (VNEM) billing arrangements. Under the VNEM approach, generation assets whose production of power exceeds on-site demand would be able to virtually allocate their excess energy output, as a net metered bill offset, to one or more elected accounts in the local area.

VNEM has been proposed as a potential solution for overcoming existing barriers to the adoption of distributed renewable generation technologies within low-income and renter dominated communities. Residents of these communities often lack the financial resources or legal standing necessary to install renewable generation systems on their own homes. Consequently, they are structurally prohibited from accessing the many benefits, financial and otherwise, of being able to generate renewable energy under existing net-metering tariffs.

# Methods

## Facilitate Multi-Objective Prioritization

Every significant land-use decision requires the navigation of multiple, potentially competing, objectives. The development of community solar installations using either existing rooftop space or on new carport canopy structures, is no exception to this rule. It is a common fallacy to assume that the production of electricity using the sun’s energy is a non-consumptive activity; one with few if any physical limitations beyond a place to put some solar panels. In densely populated urban environments, this could not be further from the truth. 

Among the prospective site selection concerns which must be navigated include location, solar exposure, obstructions, total generation potential, site preparation, aesthetics, grid infrastructure capacity, etc. To the greatest extent possible, one of our main goals in the development of the CSOM tool was to expose as much relevant information as possible to the user about these multiple objectives. The hope in doing so was to allow users to meaningfully compare the tradeoffs which exist among different candidate sites. 

## Enable Dynamic Filtering

In addition to the previous goal of providing multiple lines of information to users we also felt strongly about the need to give them control over where and how to set key thresholds for removing candidate sites from consideration. The rationale behind such dynamic filtering capabilities was to allow users to quickly eliminate undesirable options from consideration using combinations of constraints that we as the tool’s developers may not have previously considered or thought relevant. This is as opposed to a solution which would have involved us, the developers of the tool, making assumptions about the relative priorities, a priori. 

Allowing for this type of filtering to be performed interactively is critical within the context of problem domains where non-linear relationships or discontinuous attributes may exist. The experience of using an interactive filter helps users to learn about the sensitivity of potential solutions to different variables. This type of functionality can be hugely important for overcoming pre-existing biases about different solutions to a problem.

## Provide Rich Context

Our third development objective was to provide rich context to users precisely at the times and places where it would be most relevant/desired. This context includes detailed values/information where other visual or stylistic cues had previously been used to communicate attribute values or other information. To do this, we explored the use of several tools and techniques such as customized base-maps with dynamic point of interest (POI) rendering capabilities, interactive hover/on-click attribute information pop-up windows, collapsible filtering widgets, downloadable data, etc. 

Beyond just providing this rich context, we were deeply concerned with users’ ability to process/navigate it. To address this concern, we additionally explored several different options for either decomposing the tool into smaller, more digestible components, and, alternatively, providing detailed user-guide information and answers to frequently asked questions about both user interface components and conceptual ideas relating to the information being shared. 

## Serve the Needs of CBO Partners

The final and overarching development goal of this project was to serve the specific needs of our local CBO partners. These are individuals who were meant to represent the interests of the broader group of intended users for the tool. To ensure that this objective would be achieved we engaged in the following activities. 

### Training CBOs on energy systems science and administration

We developed an educational curriculum dealing with basic engineering, administrative, and economic considerations of the energy system. We called this curriculum “Energy 101.” It was delivered in a series of in-person and remote lectures over a period of several months, after which we provided the slides and recorded presentation materials to the CBO partners who participated for their reference and potential future use.

### Eliciting structured feedback through surveys and exercises

In addition to this, we staged multiple training and feedback gathering sessions during the tool’s initial development phases where early prototype versions of the tool were demonstrated and structured conversations were had about current/desired future functionality, data sources, documentation, etc. As part of these activities, we would develop different exercises that challenged the CBO to use the tool in specific ways to accomplish a set of predefined tasks. We would note rates of success and failure in these exercises and attempt to identify weakness either in the data, design, or documentation that could be improved.

### Responding to feature requests and usability issues 

Each of the training/feedback sessions with CBO partners were followed up with questionnaires where participants were asked to provide detailed suggestions and feedback. At each round, this feedback was collated into a feature request and to-do list for the development team. Each element on this list was either addressed with a change to the tool or an explanation for why no action was or could be taken. The list was shared with our CBO partners. 

### Making data available for download and further analysis

All of the underlying data that powers the front-end mapping elements of the CSOM tool are readily available for download. These data are accessible in a variety of different spatial (ESRI shapefile, GeoJSON, GeoPackage, etc.) and non-spatial (Microsoft Excel, CSV) formats to support a wide range of user backgrounds and end goals. Enabling this data-download capability was an important objective of the tool’s development process and influenced a number of decisions which were made in terms of the tool's technical development.

# Results

All of the source code used to develop the CSOM tool can be accessed at the project's GitHub repository:

[Project Github Repository](https://github.com/ericdfournier/sgc_pt)

The production version of the tool can be accessed via the following link:

[Project Website](https://solar.energyatlas.ucla.edu)
