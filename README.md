# Wahrnehmung der Kriminalität in Deutschland

This visualization project which was developed in the context of a university course, The visualization is aimed especially at older citizens.

The visualization "Wahrnehmung der Kriminalität in Deutschland (Perception of Crime in Germany)" was created as part of a project of the module "Data Visualization" in the winter semester 2021/22 at Freie Universität Berlin.

It's about perceived insecurity.

Our target group is generally people over 65, as they are predominantly affected by this problem.
For our visualization this means the following:
- Large font sizes
- Few & high contrast colors
- Large buttons
- not a high data litracy

So try to think your way into this group beforehand.


## Approach:
### About finding the target audience and the topic
We took a close look at the PKS 2020 data and got an overview of what ratios could be mapped.
After we were made aware of the Netzpolitik.org article, we took up the topic as very interesting. We looked more into the topic.
Since the problem that is pointed out in the article affects about 77% of older citizens over 65. We found the idea exciting to design a visualization aimed primarily at them.


### About designing the prototype
It was particularly important to us that the content should be easy to read, easy to use and, above all, easy to understand.
That's why we also spent a lot of time on the topic of "accessibility".
This resulted in the above-mentioned requirements.

We decided on a visualization that can be described as "story telling".

The domain could be described as a "general view of crime".

It was important to us that the users of the site go through the following steps:
* Thinking about their own opinion on the topic.
* Comparing how their own opinion matches the overall social picture
* Comparing how far the societal picture can be refuted by numbers.

It was also important for us to provide interpretive tools to help look at the data in a larger context.

### About evaluating and open todo's
After we had a first prototype, we tried to do an evaluation with some friends.
In doing so, we deliberately tried to make the view more difficult to simulate the "accessibility" claim.

Some things we would have liked to implement that we have already noticed through a small evaluation:
* Choose more appealing colors that are also subject to "readability" rules.
* Font sizes, "tuning" for all devices (they are scalable, but we couldn't judge well how readable the font is on small devices).
* Make visualizations responsive, (currently the design breaks on small devices like smartphones).
* Conduct an evaluation with multiple participants from the target audience.

## Build and Start application

- Clone directory
- Go to the root directory
- run `NPM I`
- run `NPM Start`

You should be able to see the website at localhost:3000

## Data Preperation

The Data from PKS is prefiltered, before being used inside the react aplication. The code is within the "data-preperation" folder

The Data came from:
https://www.kas.de/de/monitor/detail/-/content/wenn-es-nacht-wird-in-deutschland: 07.02.2022

- Abbildung 1: Kriminalität als Problem
- Abbildung 4: Veränderung der Kriminalität

https://www.bka.de/DE/AktuelleInformationen/StatistikenLagebilder/PolizeilicheKriminalstatistik/PKS2020/PKSTabellen/Zeitreihen/zeitreihen_node.html: 07.02.2022

- Grundtabelle T01

https://www.bka.de/DE/AktuelleInformationen/StatistikenLagebilder/PolizeilicheKriminalstatistik/PKS2020/Interpretationshilfen/interpretationshilfen_node.html: 07.02.2022

- PKS 2020 - Straftatenkatalog aktuell: 07.02.2022
- PKS 2020 - Straftatenkatalog (4-stellig) - Historie bis 2020: 07.02.2022
- PKS 2020 - Tabellenbeschreibung

## Participants
* Jakob Knitter (Jakok07@fu-berlin.de)
* Jonas Schäfer (jonas.schaefer@fu-berlin.de)
