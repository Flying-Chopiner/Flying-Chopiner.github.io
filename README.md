# 目录

> ~~简单水一点字数（bushi）~~
>
> 基本上前置都有写明
>
> 需要注意的是，从Ch-7操作系统开始建议按章节顺序往后学，基本上前者就是后者的前置课
>
> 而且从这操作系统开始就有很多巨难的课，需要网上另找很多资料
>
> ~~基于现在基本忘光了，就不贴资料了（bushi）~~
>
> 参考资料
>
> * https://www2.simtoco.com/#/home



# 0、工具

## 0）vim/emacs

> 两个学习曲线极其陡峭的文本编辑器
>
> 当然你可以扩展成一个跟ide类似的，一堆大神
>
> emacs可能会更全面一些

* [vim](https://learnvimscriptthehardway.stevelosh.com/)
* [emacs](https://www.zhihu.com/column/c_1440829147212279808)



## 1）MIT-Missing-Semester

> 计算机教学中消失的一个学期
>
> 这门课会教很多基础工具，后面所有课基本都是默认你是懂这些的
>
> Shell、命令行、Git、Vim、tmux、ssh、GNUmake、CMake...
>
> 最好搭配一些参考资料看，建议先装一个unix系统，比如：linux

官网：https://missing-semester-cn.github.io/

视频：https://www.youtube.com/playlist?list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J



## 2）GNUMake

> 处理gcc的工具
>
> 能让你用gcc编译时控制想要重新编译的工具

参考资料：[GNUMake](https://seisman.github.io/how-to-write-makefile/overview.html)



## 3）CMake

> 比Makefile更好用更难的工具
>
> 前置：GNUMake

参考资料：[CMake](https://cmake.org/cmake/help/latest/guide/tutorial/index.html)

# 1、数学

## ~~1）MIT 18.01/18.02~~

> 微积分
>
> 前置：无

官网：[18.01](https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/syllabus/), [18.02](https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/)



## ~~2）MIT 18.06~~

> 线代
>
> 前置：无

官网：https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/syllabus/



## 3）UCB CS70

> 离散数学和概率论入门，每个模块都会介绍理论在算法的应用
>
> 建议只看note，视频b站有搬运但是一坨答辩
>
> 前置：无

官网：http://www.eecs70.org/



## 4）UCB CS126

> 概率论进阶，难度不低
>
> 除了理论作业外还有9个编程作业
>
> 前置：CS70、微积分、线性代数

官网：https://inst.eecs.berkeley.edu/~ee126/fa20/content.html

教材：[PDF](https://link.springer.com/content/pdf/10.1007%2F978-3-030-49995-2.pdf), [Epub](https://link.springer.com/download/epub/10.1007%2F978-3-030-49995-2.epub), [Jupyter Notebook](https://jeanwalrand.github.io/PeecsJB/intro.html)



## 5）MIT 18.330

> 数值分析课，编程语言用的是Julia
>
> 有10个编程作业
>
> 前置：微积分，线性代数，概率论

官网：https://github.com/mitmath/18330

教材：https://fncbook.github.io/fnc/frontmatter.html



## 6）CMU 10-725

> 凸优化，基于python
>
> 建模求解方程
>
> 前置：Python，微积分，线性代数，概率论，数值分析

官网：https://www.stat.cmu.edu/~ryantibs/convexopt/#top=

视频：https://www.youtube.com/playlist?list=PLRPU00LaonXQ27RBcq6jFJnyIbGw5azOI





# 2、编程基础

## ~~0-1）CS50x~~

> 编程导论课，涉及C, Python, SQL, HTML, CSS, JavaScript的简单介绍
>
> 前置：无

官网：https://cs50.harvard.edu/x/2023/



## ~~0-2）CS50P~~

> CS50x的番外，涉及python的简单入门
>
> 前置：无

官网：https://cs50.harvard.edu/python/2022/



## 1）UCB CS61A

> UCB CS系列第一门课，涉及Python, Scheme, SQL
>
> 强调抽象，让学生掌握用程序来解决实际问题，而不关注底层的硬件细节
>
> 前置：无

官网：https://inst.eecs.berkeley.edu/~cs61a/su20/

教材原版：https://www.composingprograms.com/

教材中文版：https://composingprograms.netlify.app/



## 2）Duck C

> C语言程序设计，一共四门课，涉及GDB、Valgrind、Emacs等工具使用
>
> 需要提前2星期申请助学金才能白嫖
>
> 前置：无

官网：https://www.coursera.org/specializations/c-programming



# 3、数据结构与算法

## 1）Stanford CS106B/X/L

> Stanford的进阶编程课，主体还是编程抽象，涉及一些简单的数据结构和算法
>
> 其中106X是106B的pro版，难度大一点，CS106L是补充C++的特性和语法
>
> 前置：编程基础

官网：[CS106B](https://web.stanford.edu/class/cs106b/), [CS106X](https://web.stanford.edu/class/cs106x/)，[CS106L](http://web.stanford.edu/class/cs106l/)



## 2）Coursera Algorithms I & II

> 系统算法课，一共10个project质量很高
>
> 前置：CS61A

官网：[Algorithm I](https://www.coursera.org/learn/algorithms-part1), [Algorithm II](https://www.coursera.org/learn/algorithms-part2)

教材：https://algs4.cs.princeton.edu/home/



## 3）MIT 6.006

> 算法设计与分析，用的python，难度很大
>
> 前置：CS106B

官网：[https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/)



## 4）MIT 6.046

> MIT 6.006的后续课，更侧重于应用
>
> 前置：MIT 6.006

官网：[Spring 2015](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/)



## 5）MIT 6.854

> 高级算法，还没上过
>
> 前置：MIT 6.054

官网：https://ocw.mit.edu/courses/6-854j-advanced-algorithms-fall-2005/pages/syllabus/



# 4、软件工程

## 1）MIT 6.031

> MIT的软件工程课，目标就是写出高质量的代码
>
> 前置：编程基础

官网：[2021spring](http://web.mit.edu/6.031/www/sp21/), [2016spring](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-005-software-construction-spring-2016/)



## 2）NULL



# 5、人工智能

## 1、CS50 AI

> 基础AI入门课，涉及12个编程作业
>
> 前置：数学基础+Pyhton

官网：https://cs50.harvard.edu/ai/2020/



## 2、UCB CS188

> UCB 的人工智能入门课，基本只看note即可
>
> 前置：CS70+Python

官网：[Fall 2022](https://inst.eecs.berkeley.edu/~cs188/fa22/)，[Fall 2018](https://inst.eecs.berkeley.edu/~cs188/fa18/index.html)



# 6、体系结构

## 1）Coursera Nand2Tetris

> 体系结构入门课，不需要前置基础

官网：[Nand2Tetris I](https://www.coursera.org/learn/build-a-computer/home/week/1), [Nand2Tetris II](https://www.coursera.org/learn/nand2tetris2/home/welcome)

教材：[计算机系统要素：从零开始构建现代计算机](https://github.com/PKUFlyingPig/NandToTetris/blob/master/[计算机系统要素：从零开始构建现代计算机].(尼萨).周维.扫描版.pdf)



## 2）CMU CS15-213

> CMU镇系神课，特点就是巨难，一共11个project
>
> 前置：编程基础，数据结构与算法

官网：http://csapp.cs.cmu.edu/

视频：https://www.bilibili.com/video/BV1iW411d7hd

中文解说：https://www.bilibili.com/?bvid=BV1cD4y1D7uR&spm_id_from=333.788.seo.out



## 3）CS61C

> UCB CS系列最后一门课，深入计算机的硬件细节
>
> 一共11个lab和4个project
>
> 前置：编程基础，数据结构与算法

官网：https://cs61c.org/su20/

视频：[B 站](https://www.bilibili.com/video/BV1fC4y147iZ), [Youtube](https://www.youtube.com/playlist?list=PLDoI-XvXO0aqgoMQvogzmf7CKiSMSUS3M)



# 7、操作系统

## 1）NJU OS

> 南大的OS课，用C讲的

- 官网：https://jyywiki.cn/OS/2022/index.html
- 视频：https://space.bilibili.com/202224425/channel/collectiondetail?sid=192498
- 教材：http://pages.cs.wisc.edu/~remzi/OSTEP/
- 作业：https://jyywiki.cn/OS/2022/index.html



## 2）MIT 6.S081

> MIT 的OS课，用的RISC-V

官网：https://pdos.csail.mit.edu/6.828/2021/schedule.html

视频：https://www.youtube.com/watch?v=L6YqHxYHa7A

文档： https://mit-public-courses-cn-translatio.gitbook.io/mit6-s081/

教材：https://pdos.csail.mit.edu/6.828/2021/xv6/book-riscv-rev2.pdf

作业：https://pdos.csail.mit.edu/6.828/2021/schedule.html



## 3）UCB CS162

> UCB 的OS课，难到爆炸

官网：https://cs162.org/

视频：https://www.youtube.com/watch?v=YfHY0pvpRkk

教材：[Operating Systems: Principles and Practice (2nd Edition)](http://ospp.cs.washington.edu/)



# 8、计算机网络

## 1）USTC

> 中科大的计网课

官网：http://staff.ustc.edu.cn/~qzheng/teaching.html

视频：https://www.bilibili.com/video/BV1JV411t7ow/

课件：http://staff.ustc.edu.cn/~qzheng/cn.zip



## 2）Stanford CS144

> 计网进阶课，设计8个project实现TCP/IP协议栈

官网：https://cs144.github.io/

视频：https://www.youtube.com/watch?v=r2WZNaFyrbQ&list=PL6RdenZrxrw9inR-IJv-erlOKRHjymxMN

# 9、数据库系统

## 1）CMU 15-445

> 一门质量极高，资源极全的Database入门课

官网：[Fall 2019](https://15445.courses.cs.cmu.edu/fall2019/schedule.html), [Fall 2020](https://15445.courses.cs.cmu.edu/fall2020/schedule.html), [Fall 2021](https://15445.courses.cs.cmu.edu/fall2021/schedule.html), [Fall 2022](https://15445.courses.cs.cmu.edu/fall2022/schedule.html), [Spring 2023](https://15445.courses.cs.cmu.edu/spring2023/schedule.html)

视频：[Fall 2022](https://www.youtube.com/playlist?list=PLSE8ODhjZXjaKScG3l0nuOiDTTqpfnWFf)



## 2）UCB CS186

> UCB的数据库实现课，用的Java

官网：https://cs186berkeley.net/

视频：https://www.bilibili.com/video/BV13a411c7Qo



# 10、并行与分布式系统

## 1）CMU 15-418/UCB CS149

> 利用硬件编写高性能并行程序，难到爆炸，超级硬核

官网：[CMU15418](http://15418.courses.cs.cmu.edu/spring2016/), [CS149](https://gfxcourses.stanford.edu/cs149/fall21)

视频：http://15418.courses.cs.cmu.edu/spring2016/lectures

作业：https://gfxcourses.stanford.edu/cs149/fall21



## 2）MIT 6.824

> 分布式系统的设计与实现原则和技术，难度同上

官网：https://pdos.csail.mit.edu/6.824/schedule.html

视频翻译：https://mit-public-courses-cn-translatio.gitbook.io/mit6-824/



# 11、系统安全

## 1）MIT 6.858

> Web端的网络攻防技术
>
> 前置：C，Python

官网：http://css.csail.mit.edu/6.858/2022/



## 2）UCB CS161

> UCB 的计算机系统安全课程

官网：https://su20.cs161.org/

教材：https://textbook.cs161.org/



# 12、Web全栈开发

## 1）Full Stack open

> 用JavaScript构建Web程序

官网：https://fullstackopen.com/zh/



## 2）NULL



# 13、编译原理

## 1）Stanford CS143

> 斯坦福的编译原理课程，最终实现一个编译器

官网：http://web.stanford.edu/class/cs143/

视频：https://www.bilibili.com/video/BV17K4y147Bz



## 2）NULL



# 14、机器学习

## 1）Coursera Machine Learning

> 机器学习入门课

官网：https://www.coursera.org/learn/machine-learning



## 2）UCB CS229

> 机器学习的研究生课，数学推导很多

官网：http://cs229.stanford.edu/syllabus.html

视频：https://www.bilibili.com/video/BV1JE411w7Ub



# 15、深度学习

## 1）Coursera Deep Learning

> 深度学习入门课

官网：https://www.coursera.org/specializations/deep-learning



## 2）李宏毅机器学习

> python的深度学习进阶课，作业量很大

官网：https://speech.ee.ntu.edu.tw/~hylee/ml/2022-spring.php



# 16、机器学习系统

## 1）CMU 10-414/714: Deep Learning Systems

> 深度学习底层框架的开发，覆盖了深度学习系统全栈

官网：[https://dlsyscourse.org](https://dlsyscourse.org/)

视频：https://www.youtube.com/watch?v=qbJqOFMyIwg

作业：https://dlsyscourse.org/assignments/



## 2）Machine Learning Compilation

> 机器学习编译，极其硬核
>
> b站和油管都有很详细的资料

网站：https://mlc.ai/summer22-zh/

视频：[Bilibili](https://www.bilibili.com/video/BV15v4y1g7EU?spm_id_from=333.337.search-card.all.click&vd_source=a4d76d1247665a7e7bec15d15fd12349)

笔记：https://mlc.ai/zh/index.html

作业：https://github.com/mlc-ai/notebooks/blob/main/assignment
