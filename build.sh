content="<style>*{line-height: 1.5;}</style><ol>"
for shname in `cd archives && ls`
do
  name=`echo "<li><a href=\""archives/$shname"\"
  target=\"_blank\">$shname</a></li>" | awk -F. '{print $1}'`
  content=${content}${name}
done
content=${content}"</ol>"
echo ${content} > index.html
echo "build success!"
