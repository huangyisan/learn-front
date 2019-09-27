from pyecharts.charts import Line
from pyecharts import options as opts

l = []
def calc(day, per,fa):

    if day == 1:
        single = fa * (1+per)
        l.append('%.2f' % single)
        return single
    else:

        a =  calc(day-1,per,fa)*(1+per)
        l.append('%.2f' % a)
        return a
calc(50,0.03,100)

myline = Line()
myline.add_xaxis([i for i in range(50)],)
myline.add_yaxis("罚款",l,color='black')
myline.set_global_opts(title_opts=opts.TitleOpts(title="Line-基本示例",title_textstyle_opts=opts.TextStyleOpts(color="black")))
# myline.set_global_opts(legend_opts=opts.LegendOpts(is_show=False))
myline.render()

# .set_global_opts(
#     title_opts=opts.TitleOpts(
#         title="Bar-背景图基本示例",
#         subtitle="我是副标题",
#         title_textstyle_opts=opts.TextStyleOpts(color="white"),