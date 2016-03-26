content="<style>*{font-size: 30px;line-height: 60px;}</style><ul>"
for shname in `cd archives && ls`
do
  name=`echo "<li><a href=\""archives/$shname"\"
  target=\"_blank\">$shname</a></li>" | awk -F. '{print $1}'`
  content=${content}${name}
done
content=${content}"</ul>"
echo ${content} > index.html
echo "build success!"
