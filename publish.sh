echo "오늘자 TIL 작성완료시에만 Y를 입력해주세요. (Y/N)"

# shellcheck disable=SC2162
read ifTILCompleted

if [ "$ifTILCompleted" = "Y" ]
then
    date=$(date '+%Y-%m-%d')

    git add .

    git commit -m "update: ${date}일자 TIL 작성"

    git push origin main

    echo "TIL publish 완료"
else
    echo "TIL publish 취소"
    exit 1
fi