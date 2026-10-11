



Intro to Design and Manufacturing
Spring Quarter
Team 27 Final Report
9th June, 2026






Sophia Ehlert
Joseph Mongane
Henry Bao
Dev Jhaveri
Josh Wang

Table of Contents
Team Roles	1
Needs and Metrics Table	2
Design Concept Development	5
Initial Testing Results	15
Design Improvements	17
Final Testing	20
Additional Improvements and Adjusting for Manufacturability	21
Final Discussion	24
References	25

List of Tables
Table 1. Needs Table....................................................................................................................... 2
Table 2. Metrics Table and Functional Requirements. ................................................................... 3
Table 3. Initial Testing Results...................................................................................................... 15
Table 4. Final Testing Results....................................................................................................... 20
Table 5. Sources for Needs and Metrics Table.............................................................................  27

List of Figures
Figure 1. Initial design space sketches of the brake caliper assembly........................................... 5
Figure 2. Initial concept sketches of brake calipers based on design space.............................. .... 6
Figure 3. Initial brake caliper design for FEA............................................................................... 6
Figure 4. Free body diagram of brake system............................................................................... 7
Figure 5. Endurance S-N Diagram of SLS Nylon 12............................................. ..................... 10
Figure 6. Displacement in left and right caliper from initial FEA................................................ 11
Figure 7. Stress distribution in left and right caliper from initial FEA........................................  12
Figure 8. Final iteration of brake caliper design for FEA........................................................ … 13
Figure 9. Topology optimization of right caliper arm.................................................................. 13
Figure 10. Stress distribution in left and right caliper from final FEA........................................ 14
Figure 11. Deformation in left and right caliper from final FEA................................................. 14
Figure 12. Calipers assembled on bikes for initial testing............................................................ 16
Figure 13. Revised CAD in braking assembly............................................................................. 17
Figure 14. FEA on revised design after testing – right caliper............................... ..................... 18
Figure 15. FEA on revised design after testing – left caliper....................................................... 18
Figure 16. Final printed design assembled on bike for testing..................................................... 20





Team Roles

Sophia Ehlert  - CAD and Manufacturing Lead
Dev Jhaveri - CAD and Manufacturing Lead
Joseph Mongane - FEA and Topology Lead 
Josh Wang - Documentation Lead
Henry Bao - Scheduling Lead
Needs and Metrics Table
Needs and metrics tables were generated to catalog all of the requirements for the brake caliper design along with the ISO standards and team standards of the performance. Table 1. highlights the functional requirements of the design and priority score on a scale of 1-5, while table 2. shows the metrics of performance for the functional requirement along with units and sources for defining metrics. 

Table 1. Needs Table - Defined by the design requirements and team standards and ISO standards. 
Needs Table
#
Need
1-5
1
The brake provides sufficient stopping force
5
2
The brake can be controlled with the handle bars
5
3
The brake fits a wide variety of cycles, tires and wheels
2
4
The brake inspires confidence 
3
5
The brake is easy to manufacture and assemble
4
6
The brake is cost effective to produce
2
7
The brake requires low rider input force
5
8
The brake is lightweight
5
9
The brake performs consistently under repeated braking (heat)
5
10
The brake avoids unintended contact with the wheel
5
11
The brake is not contaminated by grunge
4
12
The brake attaches securely to the bicycle frame
5
13
The brake allows easy replacement of worn parts
1
14
The brake is designed using environmentally sustainable practices 
2
15
The brake must be safe for the user in the event of a crash
4
16
The brake maintains performance over long-term use
5
17
The brake maintains function in a wet environment 
5
18
The brake allows a smooth, safe stop
5



Table 2. Metrics Table and functional requirement addressed 
Metrics Table
#
Needs Addressed
Metric
Units
Ideal Value
Marginal Value
Source
1
1
Braking distance (rear only, dry) @ 25 km/h
m
7.5 m
≤ 15 m
A
2
1, 17
Braking distance (rear only, wet) @ 16 km/h
m
5 m
≤ 10 m
A
3
12, 16
Braking performance value after 1000 cycles (rear only, dry)
N
400 N
≥ 200 N
B
4
12, 16
Braking performance value after 1000 cycles (rear only, wet)
N
240 N
≥ 120 N
B
5
17
Wet/dry braking performance ratio
—
1
> 0.4
C
6
7
Max. lever operating force to achieve specified braking performance
N
100 N
≤ 180 N
D
7
9
Post-heat-resistance Bp as % of peak dry and wet value
%
90%
≥ 60%
E
8
10
Distance between brake pad and rim of wheel
mm
6
10
F
9
2
Compliant with ISO 4210-4
binary
yes
yes
G
10
11
Braking performance value after contamination
N
≥ 90% of clean performance
≥ 50% of clean performance
B
11
11
Braking distance after contamination (rear only) @ 16 km/h
m
5 m
≤ 10 m
A
12
3
Rim size that the caliper brake can house 
mm
72
28
H
13
8
Weight of the brake caliper assembly
g
150
< 200
I
14
14
Time required to print the part in the assembly 
hours
< 3
< 10
J
16
5
Number of parts in assembly excluding hardware
quantity
1
< 4
I
17
4
Average user confidence rating (1-5) during braking tests
score
5
> 4
K
18
15
Maximum protrusion distance of components on the brake assembly
mm
12.7
76
L
19
6
Cost of manufacturing and assembly
$
$25
< $130
I
20
13
Number of tools required for replacement
count
1
≤ 3
I
21
18
Compliant with ISO 4210-2
binary
yes
yes
M


Design Concept Development

The first task in designing the brake caliper system was constructing an estimation of the design space that satisfies the functional requirements highlighted in the needs table. An initial concept sketch of the design space was generated using parameters for dimensions such as rim size, distance to mounting points and distance from the frame of the bike. The design space is shown in figure 1, while the restricted areas are highlighted in red. 


Figure 1. Initial design space sketches of the brake caliper assembly


From the design space we were able to generate rough concept sketches of what the components of the brake calipers geometries to begin optimizing load paths, stress and performance. The initial geometry based on the design space is shown in figure 2 along with the forces acting at each point and the parameters for the dimensions. 





Figure 2. Initial Concept sketches of brake calipers based on design space


Given the initial design sketches and the parameters for the dimensions the internal stresses can be calculated for in terms of the dimensions. An estimation for the shear stresses were calculated along with the normal stresses. We predicted that the points of max stress would occur around the mounting hole and on the elbows of the caliper due to stress concentrations. To optimize the load path we used curved edges in corners and more material around the mounting holes. Our initial design for Finite Element analysis is shown in figure 3. 


Figure 3. Initial brake caliper design for FEA



We then used hand calculations and FEA to predict the loads on each brake caliper. Starting from the known bicycle geometries as well as our design parameters, we derived an equation to relate input force to normal force on the tire rims (see Figure 4.).


Figure 4. Free body diagram of brake system

The following values were constrained by the bike geometry, and were measured as the following:

rin= 2 cm
rout=9 cm
rpad=47.5 mm

To ensure that the normal force acting on the rim from both brake pads were equal, we constrained the caliper geometry so that the cable points were positioned vertically above each other ( rcable1 = rcable2). Using sum of moments, we derived the following relationships:

	T=rinroutFin										(1)
	N1=N2=rinrcablerpadrout									(2)

From there, we correlated normal force to braking distance. Max braking force occurs when the tire starts to slip on the ground, and the wheel is locked entirely by the brakes. At max braking force, the brake pads are not doing any work on the tire, and conservation of energy gives us:

	Ffrd=12mv02,									(3)

where m is the combined mass of the bicycle and its rider, v0 is the initial velocity of the bike at the point of braking, d is the stopping distance, and Ffr is the force of friction between the tire and the road. 

Sum of moments about the center of bike tire gives the following equation:

	Ffrrtire=Ffb rbrake , 								(4)

Where rtire is the radius of the tire, rbrake is the distance from the center of the tire to the brake pad, and Ffb is the frictional force of the brake pad on the tire rim, which can be represented as:

	Ffb=N,										(5)

where  is the coefficient of friction between the rubber brake pad and the tire rim. Rearranging equations (3) and (4) to get rid of the force of friction of the road (Ffr ), and plugging in (5), we get:

	 N rbrakertire d=12mv02									(6)

Substituting in (2) for the normal force, we get an equation describing the relationship between input force (Fin ) and stopping distance (d ):

	Fin=m v02 rpad rout rtire4d rinrcable  rbrake									(7)

We assumed a combined mass of the bicycle and its rider (m) of 76.5kg, and a coefficient of friction between the brake pad (rubber) and the steel rim () of 0.6. The following values were measured from the bike:

	rtire=34.25 cm
	rbrake=30.5 cm

From the stopping distance requirement defined by ISO standards, we used

v0=25 km/hr, and
d=7.5m.

For the FEA setup, each caliper arm was analyzed using Nylon-12 material properties and was loaded using the cable tension determined from the hand calculations. The cable tension force 
(T) was applied at the cable mounting point, acting vertically (upwards on the right caliper and downwards on the left caliper), and a pin constraint was applied at the mounting hole to allow rotation. The brake pad was constrained against the fixed wheel rim, and a frictional force (Ffb) was applied at the pad-rim interface in the direction of the forward spinning wheel.

We used  a value of rcable=45.5 mm (a design parameter which was defined in our CAD). From equation (7) above

	Fin=56.85N

Plugging into (1), we got

	T=255 N,

And equation (2) gives us

	N=245N.

Lastly, equation (5) gives us

	Ffb=147 N.

Before conducting FEA we defined our desired performance of maximum stress and deflection. The sum of deflections in the y-direction for each brake caliper could not be greater than 11 mm because this was maximum depression of the handle. The maximum stress values were determined from the Ultimate stress of Nylon 12, and the fatigue limit based on a given number of cycles. Figure 5. Shows the ultimate and fatigue stresses of the material by number of cycles. 
Our number of cycles to failure was based on the typical commuter cyclist using a road bike. We estimated that the brakes would be activated 6 times per rider for 2 rides a day. This propagated to 365 days over 5 years gives about 20,000 cycles. 


Figure 5. Endurance SN Diagram of SLS Nylon 12

The estimated number of cycles of 20,000 gives a value between 10 to the 4th and 10 to the 5th on the Sn Diagram. Using these values the maximum stress based on the number of cycles gives between 30 Mpa and 40 Mpa. Using the coefficients in Basquin’s Law for the different orientations gives the following 

IM    =ANb=(54.4)(20000)-0.05=33.15 Mpa  
SLS at 0    =ANb=(111.1)(20000)-0.11=37.37 Mpa  
SLS at 90   =ANb=(83.1)(20000)-0.09=34.08 Mpa  

Due to the orientation of IM being the lowest value, we defined 33.15 Mpa as our maximum stress. With these metrics we were able to conduct FEA on our initial brake calipers. Figures 6 and 7 show the deflection and stress distributions on the calipers. 




Figure 6. Displacement in left and right caliper from initial FEA


Figure 7. Stress distribution in left and right caliper from initial FEA


The FEA displacement results showed that the right caliper had a maximum deformation of 22.07mm, while the left caliper had a maximum deformation of 5.08mm. Since both values exceeded the allowable deflection limit of 11mm, both designs were too flexible under the applied loading conditions. 

The von Mises stress results showed a maximum stress of 268.42 MPa in the right caliper and 202.38 MPa in the left caliper. The high stress occurred near the mounting holes. Brake pad connections, and sharp geometry transitions, where the load path changed direction and stress concentrations develop. Overall, the FEA results show that the caliper design needed increased stiffness and reduced stress concentrations, especially in the right arm and around  the mounting pad connection regions. Figure 8. shows how the design was improved through multiple iterations of FEA. In the first iteration both calipers showed excessive bending at the brake pad attachment region in the direction of the wheel’s motion, indicating insufficient stiffness in the arms. To address this issue, additional material was added along the outer edges of the caliper arms to create an I-beam-like cross-section, which increased the moment of inertia and reduced bending. This process was repeated for multiple iterations focusing on different areas with stress concentrations and high deformation.



Figure 8. Final iteration of brake caliper design for FEA


Our team employed topology optimization within Ansys in order to better understand the stress concentrations and areas of unnecessary thickness in our caliper arm designs. An example of such can be seen in Figure 9, where the optimization process removed large amounts of mass from many areas along the load paths of the right caliper arm.

Although useful as a guide and suggestion for what could be improved in the brake caliper design, we decided to base most of our improvements on the FEA analyses. It is important to note that our caliper arms were designed with increased thickness close to pin and cable attachment points, which aligns well with the topology optimized design.


Figure 9. Topology optimization of right caliper arm

After improving the design we conducted FEA on each caliper before testing. The results, as seen in figures 10 and 11, showed notable improvement from the first iteration.   




Fig 10. Stress distribution in left and right caliper from Final FEA


Fig 11. Deformation in left and right caliper from Final FEA


Disregarding the artificially high stress values observed in the FEA, the relevant maximum stress for the left caliper and right caliper was 38.72 MPa and 46.85 MPa, respectively. The maximum allowable stress for these calipers is theoretically 33.15 MPa, the endurance strength of SLS-Nylon 12. Even though the FEA maximum stress values are larger in magnitude than 33.15 MPa, we considered the calipers to undergo a lower number of cycles as compared to the number of cycles to failure used to determine the endurance strength. Both calipers feature maximum stress values under the ultimate strength of SLS-Nylon 12, and give a single cycle load factor of safety of 1.5 which is a substantial improvement from our initial analyses and designs. The deformation also decreased to 1.949mm in the left caliper and 3.543mm in the right respectively. This design met the required functional requirement for deformation and stress defined in previous calculations.  

Initial Testing Results

We conducted testing on the calipers to ensure that they met the functional requirements and metrics defined for a desirable performance. The metrics measured are highlighted in table 3, along with the initial metrics defined for desired performance. 

Initial Testing Results, Table 3
Needs
Metrics
Units
Ideal Value
Marginal Value
Measurement Tool
Measured
1
Braking distance at 25 km/h
m
7.5 m
≤ 15 m
Measuring Tape
14.6
7
Max. lever force to achieve specified braking performance
N
100 N
≤ 180 N
Dynanometer
120
10
Distance between brake pad and rim of wheel
mm
6
10
calipers
6
3
Rim size that the caliper brake can house
mm
72
28
calipers
30
8
Weight of the brake caliper assembly
g
150
< 200
Electric Scale
53.7
4
Average user confidence rating (1-5) during braking tests
score
5
> 4
User testing and feedback
4
15
Maximum protrusion distance of components on the brake assembly
mm
12.7
76
calipers
35
6
Cost of manufacturing and assembly
$
$25
< $130
Accounting sheet for total material cost
$25
13
Number of tools required for replacement
count
1
≤ 3
Visual Count
1


The results showed that the braking distance fell below the marginal but did not meet the ideal value. We assumed this was due to contact issues between the pad and the rim.  The Lever force to achieve braking performance also met the marginal requirements and not the desired value due to brake pad positioning. The weight, housing size, cost and number of tools to assemble all met the ideal value, while the rest fell short. 

The main issue we noticed with our first design was that with our caliper assembled on the bike, the brake pads were placed too low to fully contact the wheel rim (see Figure 12 below). This is due to the calipers extending downwards too far relative to the wheel rim. To resolve this issue, we changed the CAD design so that the arms of the caliper are shorter in height.



Figure 12. Calipers assembled on bike for initial testing


Design Improvements

For our design improvements we shortened the height of our caliper brakes because when we mounted them on the bike, we noticed that the brake pads did not fully make contact with the wheel rim. The caliper arms extended too far downwards, and by reducing the height in our final version we eliminated this issue entirely. We modeled the whole assembly again in CAD with the bike frame and rim to confirm the dimensions (see Figure 13 below). While the first design passed testing, the stopping distance was very close to the allowed max from ISO standards. We believe that modifying the calipers to allow better contact between the brake pads and rim will result in a better braking performance, and also increase stiffness of the calipers since the lever arms are being shortened. Because stiffness was not a problem with our first caliper design, we also made the parts around the brake pad attachment points 1 mm thinner to reduce weight further. After revisions, the total caliper assembly weight decreased from 53.7 g to 47.2 g. 

Figure 13. Revised CAD in braking assembly





Figure 14. FEA on revised design after testing for right caliper 


Figure 15. FEA on revised design after testing for left caliper 



After redesigning the brake calipers, we reran the FEA analysis to determine the updated maximum deflection for both the left and right calipers. The maximum deflection of the left caliper was found to be 1.674 mm, while the maximum deflection of the right caliper was found to be 3.459 mm. Therefore, the combined deflection from both caliper mounting points is 5.133 mm, which is below the allowable total deflection limit of 11 mm. This confirms that the brake system will not experience part collision or bottoming out of the brake handle, and that the full force from the brake lever will be transmitted effectively to the caliper brakes.

The FEA results are shown in the figure below, which highlights the maximum deflection values for each caliper. A factor of safety (FOS) with respect to deflection was also considered in the analysis. The calculated FOS for the caliper based on deflection is 2.14, indicating that both designs satisfy structural integrity and safety requirements.

Compared to the previous design, the redesigned calipers demonstrate a maximum deflection 0.359 mm lower, showing that the updated design provides improved stiffness and performance.

Final Testing
After implementing and submitting our design improvements, our team met for the final testing of the 3D-printed brake calipers. Our results are summarized in Table 4 and the final assembly can be seen in Figure 16.

Table 4. Final testing results
Metrics
Units
Ideal Value
Marginal Value
Measurement Tool
Measured (Lab 8)
Measured (Lab 10)
Braking Distance
m
7.5
≤ 15
Measuring Tape
14.6
12.9
Force to Depress Handle
N
100
≤ 180
Force Gauge
120
130
Weight
g
150
< 200
Scale
53.7
45.6
User Confidence (1-5)
N/A
5
> 4
Prof. Keys
4
4



Similarly to Lab 8 testing results, the measured values from Lab 10 successfully met our outlined initial needs and metrics. The results gathered also show that our brake calipers generally improved in performance metrics as compared to Lab 8 testing. Braking distance and weight decreased, user confidence remained the same, and the force applied to the handle increased slightly. It can be concluded that our design improvements had their desired effect, although there are some areas open to further improvement.


Figure 16. Final printed design assembled on bike for testing

The most pressing concern with the final design is that because of the shorter height of the caliper arms, the brake caliper assembly clamps onto the wheel rim without depressing the brake handles. To prevent this from happening in future designs, the caliper arms can be designed wider to provide space between the brake pads and wheel rim.

Other than this area for improvement, the main metric our team could focus on is improving the user confidence rating. The ratings of 4 attained in Lab 8 and Lab 10 testing are acceptable, but it is probable that this could be increased through addressing other design shortfalls.

Taken as a whole, the final testing we accomplished confirmed the effectiveness of our brake caliper design and improved its performance based off of the lessons learned from Lab 8 testing.

