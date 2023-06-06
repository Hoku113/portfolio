

const Sugarcane = () => {
    return (
       <>
         <div class="title">
            <h1>サトウキビプロジェクト</h1>
            <h2>NPO法人石西礁湖サンゴ礁基金提供プロジェクト</h2>
   
            {/* background image */}
         </div>
   
         <div class="section1">
            <h2>畑の赤土流出の問題を解決する</h2>

            {/* image */}

            <p>
               近年、沖縄にあるサンゴ礁の減少が続いており、その原因の一つに赤土流出の問題がある。
               過度な農薬散布により赤土が削れ、農薬の成分を含んだ赤土が雨の影響で海に流れ出ることによってサンゴ礁の減少につながってしまう。
               この農薬の成分が含まれている赤土を減らすことで、サンゴが死滅する範囲を拡大させないように工夫する必要がある。
            </p>

         </div>

         <div class="section2">
            <h2>AIを用いて雑草を検出して自動で農薬を散布させる</h2>
            <p>
               過度な農薬散布を防止するためには、必要な場所に必要な量だけ散布できるようにする必要がある。
               しかし、人の手で行う場合時間がかかりすぎてしまう。そこでAIの画像認識技術を用いて雑草を自動的に検出し、
               農薬を散布させる筐体を開発した。
            </p>

            <div class="sample">
               <p>AIを用いて雑草を検出している様子</p>
               <img src="" alt="AI result"/> 
               
               <p>実際に作成した筐体</p>
               <img src="" alt="machine image"/>
            </div>

         </div>
       </>
    )   
   }
   
   export default Sugarcane