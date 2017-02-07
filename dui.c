void siftdown(int i) //传入一个需要向下调整的结点编号i，这里传入1，即从堆的顶点开始向下调整
{
    int t, flag = 0; //flag用来标记是否需要继续向下调整
    //当i结点有儿子的时候（其实是至少有左儿子的情况下）并且有需要继续调整的时候循环窒执行
    while( i * 2 <= n && flag == 0 )
    {
        //首先判断他和他左儿子的关系，并用t记录值较小的结点编号
        if( h[ i] > h[ i * 2] )
            t = i * 2;
        else
            t = i;
        //如果他有右儿子的情况下，再对右儿子进行讨论
        if(i * 2 + 1 <= n)
        {
            //如果右儿子的值更小，更新较小的结点编号
            if(h[ t] > h[ i * 2 + 1])
                t = i * 2 + 1;
        }
        //如果发现最小的结点编号不是自己，说明子结点中有比父结点更小的
        if(t != i)
        {
            swap(t, i); //交换它们，注意swap函数需要自己来写
            i = t; //更新i为刚才与它交换的儿子结点的编号，便于接下来继续向下调整
        }
        else
            flag = 1; //则否说明当前的父结点已经比两个子结点都要小了，不需要在进行调整了
    }
}